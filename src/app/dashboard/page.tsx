"use client";

import { motion } from "framer-motion";
import { MetricCard, ProgressBar, DataTable, Badge, MiniChart } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { OPERATIONAL_HEADS, REGIONS, KEY_ISSUES_VERIFIED } from "@/lib/constants";
import { Users, Globe, Building2, TrendingUp, Calendar, ArrowRight } from "lucide-react";

export default function DashboardOverview() {
  const weeklySentiment = [0.31, 0.28, 0.35, 0.38, 0.41, 0.39, 0.42];
  const weeklyReach = [1200000, 1450000, 1380000, 1620000, 1750000, 1680000, 1820000];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Intelligence Overview
          </h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Punjab Legislative Assembly Election 2027 • February
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="success" pulse>Live Data</Badge>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Last updated: May 20, 2026 11:45 AM
          </span>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <MetricCard
          title="Registered Voters"
          value="2.14 Cr"
          subtitle="21,457,160 — CEO Punjab (May 2026)"
          color="blue"
          icon={<Users className="h-6 w-6" />}
        />
        <MetricCard
          title="Punjab Population"
          value="3.14 Cr"
          subtitle="31.37M — Technical Group (Jul 2026)"
          color="cyan"
          icon={<Globe className="h-6 w-6" />}
        />
        <MetricCard
          title="Assembly Seats"
          value="117"
          subtitle="Target: 60+ for majority"
          change={0}
          trend="neutral"
          color="emerald"
          icon={<Building2 className="h-6 w-6" />}
        />
        <MetricCard
          title="Net Sentiment"
          value="+0.42"
          subtitle="Congress vs Combined Opp"
          change={5.1}
          trend="up"
          color="purple"
          icon={<TrendingUp className="h-6 w-6" />}
        />
        <MetricCard
          title="Days to Election"
          value="258"
          subtitle="February 15, 2027"
          change={0}
          trend="neutral"
          color="amber"
          icon={<Calendar className="h-6 w-6" />}
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card hover>
          <CardHeader>
            <CardTitle>Weekly Sentiment Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Net favorability score (7-day rolling)
            </p>
            <MiniChart data={weeklySentiment} color="purple" height={80} showArea />
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-emerald-500">+0.42</p>
                <p className="text-xs text-slate-500">This Week</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-400">0.38</p>
                <p className="text-xs text-slate-500">Last Week</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-500">+10.5%</p>
                <p className="text-xs text-slate-500">Change</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <CardTitle>Campaign Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Total impressions (7-day rolling)
            </p>
            <MiniChart data={weeklyReach.map(v => v / 1000000)} color="blue" height={80} showArea />
            <div className="mt-4 flex justify-between text-center">
              <div>
                <p className="text-2xl font-bold text-blue-500">18.2L</p>
                <p className="text-xs text-slate-500">This Week</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-400">12L</p>
                <p className="text-xs text-slate-500">Last Week</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-500">+51%</p>
                <p className="text-xs text-slate-500">Growth</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Issues & Regions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card hover>
          <CardHeader>
            <CardTitle>Top Voter Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Priority ranking by voter mention frequency
            </p>
            <div className="space-y-4">
              {KEY_ISSUES_VERIFIED.slice(0, 6).map((issue, i) => (
                <ProgressBar
                  key={issue.id}
                  label={`${i + 1}. ${issue.name}`}
                  value={100 - (i * 8)}
                  color={
                    issue.sentiment < -0.6 ? "rose" :
                    issue.sentiment < -0.3 ? "amber" :
                    "emerald"
                  }
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <CardTitle>Regional Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Voter distribution by Punjab region
            </p>
            <div className="space-y-4">
              {REGIONS.map((region) => (
                <div key={region.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{region.name}</span>
                      <span className="text-sm text-slate-500">{region.constituencies} ACs</span>
                    </div>
                    <ProgressBar
                      label=""
                      value={(region.constituencies / 117) * 100}
                      color="cyan"
                      showPercentage={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Caste Analysis */}
      <Card hover>
        <CardHeader>
          <CardTitle>Caste-Vote Bank Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Estimated vote share by community (indicative)
          </p>
          <DataTable
            headers={["Community", "Category", "Est. %", "Votes/Seat", "Congress Affinity"]}
            rows={[
              [<span className="font-medium">Jat Sikh</span>, "General", "21%", "28,500", <Badge key="b1" variant="success" size="sm">Medium-High</Badge>],
              [<span className="font-medium">Mazhabi Sikh</span>, "SC", "8%", "10,900", <Badge key="b2" variant="success" size="sm">High</Badge>],
              [<span className="font-medium">Bania</span>, "General", "7%", "9,500", <Badge key="b3" variant="success" size="sm">Medium-High</Badge>],
              [<span className="font-medium">Ramdasia</span>, "SC", "5%", "6,800", <Badge key="b4" variant="success" size="sm">High</Badge>],
              [<span className="font-medium">Brahmin</span>, "General", "4%", "5,400", <Badge key="b5" variant="default" size="sm">Medium</Badge>],
              [<span className="font-medium">Lodhgarh</span>, "OBC", "3%", "4,100", <Badge key="b6" variant="default" size="sm">Medium</Badge>],
              [<span className="font-medium">Arora</span>, "General", "3%", "4,100", <Badge key="b7" variant="success" size="sm">High</Badge>],
              [<span className="font-medium">Tarkhan</span>, "OBC/SC", "3%", "4,100", <Badge key="b8" variant="default" size="sm">Medium</Badge>],
            ]}
          />
        </CardContent>
      </Card>

      {/* Primary Navigation */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {OPERATIONAL_HEADS.slice(0, 6).map((head, index) => (
          <motion.a
            key={head.id}
            href={`/dashboard/${head.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group"
          >
            <Card hover className="h-full">
              <CardContent className="flex items-center gap-4 pt-5">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg ${head.color} text-white`}>
                  <span className="text-lg font-bold">{head.number}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {head.title}
                  </h4>
                  <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                    {head.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>

      {/* Secondary Navigation */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {OPERATIONAL_HEADS.slice(6).map((head, index) => (
          <motion.a
            key={head.id}
            href={`/dashboard/${head.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            className="group"
          >
            <Card hover className="h-full">
              <CardContent className="flex items-center gap-3 pt-5">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br shadow ${head.color} text-white`}>
                  <span className="font-bold">{head.number}</span>
                </div>
                <h4 className="flex-1 font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                  {head.title}
                </h4>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
