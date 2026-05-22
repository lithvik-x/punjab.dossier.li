"use client";

import { Badge, ProgressBar, DataTable } from "@/components/ui/MetricCard";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  urbanizationData,
  municipalCorpPopulationData,
  districtUrbanizationChartData,
  slumConcentrationData,
} from "@/lib/urbanization-data";
import { Building2, Users, TrendingUp, AlertTriangle, Home } from "lucide-react";

/**
 * Demography - Urbanization Section
 * Urban-rural divide, municipal corporations, and peri-urban growth patterns
 */

export default function DemographyUrbanizationPage() {
  const { overview, municipalCorporations, municipalStructure, slumData, electoralImplications } = urbanizationData;

  // Top 4 major cities for detailed view
  const majorCities = municipalCorporations.slice(0, 4);

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
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
              <Building2 className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Urbanization
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Urban-rural divide, municipal corporations, and peri-urban growth patterns in Punjab
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </motion.div>

      {/* Urban-Rural Distribution Overview */}
      <Card padding="lg" className="border-2 border-indigo-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
            <Building2 className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">
              Urban-Rural Population Distribution
            </h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Census 2011 baseline with 2026 projections
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">37.5%</div>
            <div className="mt-1 font-semibold text-teal-700 dark:text-teal-400">Urban Population</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              1.04 Cr — concentrated in 4 major cities
            </div>
            <div className="mt-2">
              <ProgressBar label="" value={37.5} color="cyan" showPercentage={false} />
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">62.5%</div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Rural Population</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              1.73 Cr — 12,278 villages across Punjab
            </div>
            <div className="mt-2">
              <ProgressBar label="" value={62.5} color="blue" showPercentage={false} />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-900/30">
            <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">27.7%</div>
            <div className="text-xs font-medium text-indigo-700 dark:text-indigo-400">1991</div>
          </div>
          <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-900/30">
            <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">33.9%</div>
            <div className="text-xs font-medium text-indigo-700 dark:text-indigo-400">2001</div>
          </div>
          <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-900/30">
            <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">37.5%</div>
            <div className="text-xs font-medium text-indigo-700 dark:text-indigo-400">2011</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/30">
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">41.5%</div>
            <div className="text-xs font-medium text-purple-700 dark:text-purple-400">2026 (proj)</div>
          </div>
        </div>

        <div className="mt-3 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Key Insight:</span> Punjab urbanized faster in 1991-2001 (6.2 pp) than 2001-2011 (3.6 pp).
            Projected to reach 41.5% by 2026. Urban voter concentration in Ludhiana, Amritsar, Jalandhar, and Mohali creates concentrated
            campaign dynamics. Rural voter ID coverage (89.58%) is higher than urban (73%).
          </p>
        </div>
      </Card>

      {/* Major Cities */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Major Urban Centres
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Top 4 municipal corporations by population — 2022 estimates
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {majorCities.map((city) => (
            <div key={city.city} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">{city.city}</div>
                  <div className="text-sm text-slate-500">{city.district} district</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {(city.estimatedPopulation2022 / 100000).toFixed(1)}L
                  </div>
                  <div className="text-xs text-slate-500">2022 est.</div>
                </div>
              </div>
              <div className="mt-3 rounded bg-white p-2 dark:bg-slate-900">
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold">Key:</span> {city.keyCharacteristic}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">13</div>
            <div className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Municipal Corporations</div>
            <div className="text-xs text-yellow-600 dark:text-yellow-300">As of 2024</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <div className="text-lg font-bold text-orange-600 dark:text-orange-400">98</div>
            <div className="text-sm font-medium text-orange-700 dark:text-orange-400">Total Municipalities</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">85 municipal councils</div>
          </div>
          <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">33.15%</div>
            <div className="text-sm font-medium text-green-700 dark:text-green-400">Mohali Growth Rate</div>
            <div className="text-xs text-green-600 dark:text-green-300">Fastest growing UA 2001-2011</div>
          </div>
        </div>
      </Card>

      {/* District Urbanization Levels */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          District Urbanization Levels
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Census 2011 urban percentage by district
        </p>

        <div className="mt-6 space-y-4">
          {districtUrbanizationChartData.slice(0, 6).map((d) => (
            <div key={d.district}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{d.district}</span>
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{d.percent}%</span>
              </div>
              <ProgressBar
                label=""
                value={d.percent}
                maxValue={70}
                color={d.percent >= 50 ? "cyan" : d.percent >= 30 ? "blue" : "orange"}
                showPercentage={false}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg bg-teal-50 p-3 dark:bg-teal-900/20">
            <div className="text-sm font-semibold text-teal-700 dark:text-teal-400">Highly Urbanized (&gt;50%)</div>
            <div className="text-xs text-teal-600 dark:text-teal-300 mt-1">Ludhiana, Mohali, Amritsar, Jalandhar</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <div className="text-sm font-semibold text-blue-700 dark:text-blue-400">Moderate (30-50%)</div>
            <div className="text-xs text-blue-600 dark:text-blue-300 mt-1">Kapurthala, Patiala, Bathinda, Gurdaspur</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <div className="text-sm font-semibold text-orange-700 dark:text-orange-400">Low (&lt;30%)</div>
            <div className="text-xs text-orange-600 dark:text-orange-300 mt-1">Mansa, Muktsar, Ferozepur, Tarn Taran</div>
          </div>
        </div>
      </Card>

      {/* Urban Voter Demographics */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Urban Voter Demographics
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Urban voting patterns and characteristics
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">~41-42%</div>
            <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-400">Urban Voter Share (2026)</div>
            <div className="mt-1 text-xs text-purple-600 dark:text-purple-300">Projected urban population share</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">55-65%</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-400">Urban Turnout</div>
            <div className="mt-1 text-xs text-blue-600 dark:text-blue-300">Lower than rural (70-80%)</div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Urban Voter Priorities:</span> Jobs, air pollution, civic infrastructure, traffic, law & order.
            <span className="font-semibold text-indigo-600 dark:text-indigo-400 ml-2">Media:</span> Social media, YouTube, digital news.
            <span className="font-semibold text-purple-600 dark:text-purple-400 ml-2">NRI Influence:</span> High in Mohali, Jalandhar, Ludhiana, Phagwara.
          </p>
        </div>
      </Card>

      {/* Slum Population */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Slum Population
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Census 2011 slum data — concentrated in AAP strongholds
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">14.5L</div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-400">Total Slum Population</div>
            <div className="mt-1 text-xs text-red-600 dark:text-red-300">14% of urban population</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">2.7L</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-400">Slum Households</div>
            <div className="mt-1 text-xs text-orange-600 dark:text-orange-300">~270,000 households</div>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Slum Concentration by City</h4>
          <div className="grid gap-3 md:grid-cols-2">
            {slumConcentrationData.slice(0, 4).map((s) => (
              <div key={s.city} className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
                <div>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{s.city}</div>
                  <div className="text-xs text-slate-500">{s.percent}% of city population</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-red-600 dark:text-red-400">{s.slumPop.toLocaleString()}</div>
                  <div className="text-xs text-slate-500">slum residents</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-400">
            <span className="font-semibold">Electoral Note:</span> Slum dwellers are concentrated in AAP strongholds (Amritsar, Ludhiana, Jalandhar).
            Congress must offer credible housing and sanitation alternatives to break AAP's urban poor base.
          </p>
        </div>
      </Card>

      {/* Urban-Rural Voting Patterns */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Urban-Rural Voting Patterns
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Comparative analysis of electoral dynamics
        </p>

        <div className="mt-6">
          <DataTable
            headers={["Dimension", "Urban Voter", "Rural Voter"]}
            rows={[
              ["Top Issues", "Jobs, pollution, civic infra, traffic, law & order", "MSP, farm debt, canal water, rural roads, drugs"],
              ["Media Consumption", "Social media, YouTube, digital news", "Cable TV, WhatsApp, vernacular print"],
              ["NRI Influence", "High (Mohali, Jalandhar, Ludhiana, Phagwara)", "Moderate (remittance-dependent villages)"],
              ["AAP Performance", "Mixed - anti-corruption appeal, civic delivery questioned", "Positive initially, fading on farm distress"],
              ["Turnout Pattern", "Lower (55-65%)", "Higher (70-80%)"],
            ]}
          />
        </div>
      </Card>

      {/* Seat Classification */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Assembly Seat Classification by Urbanization
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          117 total seats categorized by urban-rural characteristics
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border-2 border-teal-500 bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">~25</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">Urban-Dominant Seats</div>
            <div className="mt-1 text-xs text-teal-600 dark:text-teal-300">&gt;60% urban population</div>
            <div className="mt-2 text-xs text-slate-600 dark:text-slate-400">
              Ludhiana Central/South/North; Amritsar Central/North/South; Jalandhar Central/North; Mohali; Patiala Urban
            </div>
          </div>
          <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">~40</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-400">Semi-Urban Seats</div>
            <div className="mt-1 text-xs text-blue-600 dark:text-blue-300">30-60% urban population</div>
            <div className="mt-2 text-xs text-slate-600 dark:text-slate-400">
              Jalandhar West/Cantt; Amritsar West; Bathinda Urban; Pathankot; Hoshiarpur; Kapurthala; Rajpura
            </div>
          </div>
          <div className="rounded-lg border-2 border-orange-500 bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">~60</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-400">Rural-Dominant Seats</div>
            <div className="mt-1 text-xs text-orange-600 dark:text-orange-300">&lt;30% urban population</div>
            <div className="mt-2 text-xs text-slate-600 dark:text-slate-400">
              Most Malwa and Doaba seats; border belt; Kandi belt; cotton belt
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            <span className="font-semibold">Battleground:</span> The 35-40 semi-urban seats are where elections are won.
            Congress must combine rural agrarian appeal with urban development promises in these belts.
          </p>
        </div>
      </Card>

      {/* Strategic Implications */}
      <Card padding="lg" className="border-2 border-indigo-500">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
            S
          </span>
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">
              Strategic Implications for Congress
            </h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Urbanization-based electoral strategy recommendations
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {electoralImplications.congressStrategies.map((strategy) => (
            <div key={strategy.number} className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
                  {strategy.number}
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {strategy.strategyName}
                  </div>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    {strategy.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Data Quality Notes */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Data Quality & Gaps
        </h3>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {urbanizationData.dataQuality.slice(0, 4).map((item) => (
            <div key={item.dataPoint} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.dataPoint}</span>
                <span className={`rounded px-2 py-0.5 text-xs font-medium ${
                  item.status === "VERIFICATION_NEEDED"
                    ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{item.actionRequired}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-400">
            <span className="font-semibold">Note:</span> Census 2021 was not conducted (postponed indefinitely).
            Most data is from 2011 baseline with projections. Slum population and peri-urban boundaries need verification.
          </p>
        </div>
      </Card>
    </div>
  );
}
