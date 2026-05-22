"use client";

import { MetricCard, ProgressBar, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export default function PartyOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-white">
              3
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Party Propulsion
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Congress machinery overview, worker networks, booth-level agent deployment
          </p>
        </div>
        <Badge variant="info">300K Workers Deployed</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Party Workers"
          value="300,000"
          subtitle="Booth-level appointees"
          change={100}
          trend="up"
          color="cyan"
        />
        <MetricCard
          title="Booth Coverage"
          value="78%"
          subtitle="Target: 100% by Aug"
          change={12}
          trend="up"
          color="emerald"
        />
        <MetricCard
          title="Coordination Heads"
          value="117"
          subtitle="One per AC (appointed June 2025)"
          color="blue"
        />
        <MetricCard
          title="Digital Deficit"
          value="2-3x"
          subtitle="Congress lags AAP on social"
          change={-60}
          trend="down"
          color="rose"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="DCC Presidents"
          value="29"
          subtitle="29 of 29 districts (Nov 2025)"
          color="cyan"
        />
        <MetricCard
          title="Sangathan Abhiyan"
          value="3"
          subtitle="Lakh workers under campaign"
          change={100}
          trend="up"
          color="emerald"
        />
        <MetricCard
          title="Party Fiscal Debt"
          value="₹4L Cr"
          subtitle="Total Congress liabilities"
          trend="down"
          color="rose"
        />
        <MetricCard
          title="Youth Unemp."
          value="14.9%"
          subtitle="Punjab unemployment rate"
          trend="down"
          color="orange"
        />
      </div>

      {/* Political Anatomy - 2022 Election Context */}
      <Card className="border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
            Political Anatomy — 2022 Assembly Election Baseline
          </h3>
          <Badge variant="success">Cycle 2 Data</Badge>
        </div>
        <p className="mb-6 text-sm text-emerald-700 dark:text-emerald-400">
          Understanding the electoral landscape that shaped current party positioning
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">117</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total Assembly Seats</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">92</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">AAP Seats (42% vote)</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">18</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Congress Seats (23% vote)</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-slate-600 dark:text-slate-400">7</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Others (SAD+BJP=4 seats)</div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Regional Seat Distribution</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Malwa (59%)</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">69 seats</span>
              </div>
              <ProgressBar label="" value={59} color="orange" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Majha (21%)</span>
                <span className="font-medium text-blue-600 dark:text-blue-400">25 seats</span>
              </div>
              <ProgressBar label="" value={21} color="blue" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Doaba (20%)</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">23 seats</span>
              </div>
              <ProgressBar label="" value={20} color="emerald" showPercentage={false} />
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Caste Composition</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">SC Population</span><span className="font-medium">32%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Jat Sikh</span><span className="font-medium">21%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">OBC</span><span className="font-medium">31%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Mazhabi Sikh</span><span className="font-medium">6.3%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Upper Caste</span><span className="font-medium">16%</span></div>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Drug Crisis Impact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Heroin Share (India)</span><span className="font-medium text-red-600 dark:text-red-400">44.5%</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Drug Users</span><span className="font-medium">6.6M (18%)</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Overdose Deaths 2024</span><span className="font-medium text-red-600">106</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Drone Seizures 2024</span><span className="font-medium">200+</span></div>
            </div>
          </div>
        </div>
        </CardContent>
      </Card>

      <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
        <CardHeader>
          <CardTitle>Raghav Chadha Defection Impact</CardTitle>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Former Punjab Congress digital lead defected to BJP (April 2026)
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">14.6M</p>
            <p className="text-sm text-slate-500">Instagram followers before defection</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-2xl font-bold text-red-600">~1M</p>
            <p className="text-sm text-slate-500">Followers lost within 24 hours</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">7%</p>
            <p className="text-sm text-slate-500">Follower loss rate</p>
          </div>
        </div>
      </div>

      <Card className="border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle>2024 Lok Sabha Results</CardTitle>
          <p className="text-sm text-slate-500 dark:text-slate-400">
          Congress performance vs 2019
          </p>
        </CardHeader>
        <CardContent>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-3xl font-bold text-green-600">7/13</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">LS Seats Won</p>
            <p className="mt-1 text-xs text-green-600">Congress</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-3xl font-bold text-blue-600">26.30%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Vote Share</p>
            <p className="mt-1 text-xs text-blue-600">-13.82pp from 2019</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <p className="text-3xl font-bold text-yellow-600">3/13</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">AAP LS Seats</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <p className="text-3xl font-bold text-orange-600">0/13</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">BJP LS Seats</p>
            <p className="mt-1 text-xs text-orange-600">18.56% vote share</p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Key Margins</p>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-slate-500">Ferozepur:</span>
              <span className="font-medium text-red-600">3,242 votes</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Jalandhar:</span>
              <span className="font-medium text-red-600">1.76 lakh votes</span>
            </div>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">2019 Baseline</p>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-slate-500">Congress Vote Share:</span>
              <span className="font-medium text-green-600">40.12%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Swing:</span>
              <span className="font-medium text-red-600">-13.82pp</span>
            </div>
          </div>
        </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle>Booth Agent Deployment</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-3xl font-bold text-green-600">18,582</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Fully Manned Booths</p>
            <p className="mt-1 text-xs text-green-600">78% coverage</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <p className="text-3xl font-bold text-yellow-600">4,769</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Partially Manned</p>
            <p className="mt-1 text-xs text-yellow-600">20% coverage</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-3xl font-bold text-red-600">496</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Unmanned Booths</p>
            <p className="mt-1 text-xs text-red-600">Critical priority</p>
          </div>
        </div>
        </CardContent>
      </Card>
    </div>
  );
}
