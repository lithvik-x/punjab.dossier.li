"use client";

import { MetricCard, Badge, ProgressBar } from "@/components/ui/MetricCard";
import { MiniChart } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { TrendingDown, Users, AlertTriangle, Building2, Scale } from "lucide-react";

interface SADFaction {
  name: string;
  leader: string;
  status: string;
  position?: string;
}

interface SADElectoralDecline {
  election: string;
  seats?: number;
  voteShare?: string;
  note: string;
}

interface SADStatusData {
  president: string;
  presidentReElection: string;
  electoralDecline: SADElectoralDecline[];
  factions: SADFaction[];
  bspAlliance: { status: string; date: string; current: string };
  panthicIssues: { akalTakhtAction: string; sgpcControl: string; impact: string };
  keyLeaders: { name: string; status?: string; seat?: string; note: string }[];
}

const sadStatusData: SADStatusData = {
  president: "Sukhbir Singh Badal",
  presidentReElection: "April 12, 2025",
  electoralDecline: [
    { election: "2022 Assembly", seats: 3, note: "Worst ever result" },
    { election: "2024 Lok Sabha", seats: 1, note: "Bathinda only" },
    { election: "Tarn Taran By-poll", voteShare: "25.97%", note: "Severe swing" },
  ],
  factions: [
    { name: "SAD Badal", leader: "Sukhbir Singh Badal", status: "Official", position: "President" },
    { name: "SAD Punar Surjit", leader: "Gurpartap Singh", status: "Faction" },
    { name: "Waris Punjab De", leader: "Manny Singh", status: "Faction" },
    { name: "SAD Mann", leader: "Sukhdev Dhindsa", status: "Faction" },
    { name: "Other splinters", leader: "Various", status: "Minor" },
  ],
  bspAlliance: {
    status: "Collapsed",
    date: "February 2024",
    current: "Going solo",
  },
  panthicIssues: {
    akalTakhtAction: "Removed Sukhbir's 'Zinda Sadh' title",
    sgpcControl: "Contested between factions",
    impact: "Panthic credibility damaged",
  },
  keyLeaders: [
    { name: "Bikram Majithia", status: "Released Feb 2026", note: "Drug case accused" },
    { name: "Harsimrat Kaur Badal", seat: "Bathinda MP", note: "Union Minister (Resigned 2020)" },
  ],
};

export default function SADStatusPage() {
  return (
    <div className="space-y-8">
      {/* SAD (Shiromani Akali Dal) Status */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-amber-600" />
              SAD (Shiromani Akali Dal) Status
            </CardTitle>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Akali Dal electoral decline • Factional fragmentation • Panthic credibility crisis
            </p>
          </CardHeader>
          <CardContent>
            {/* SAD Leadership Metrics */}
            <div className="mt-4 grid gap-4 md:grid-cols-4">
              <MetricCard
                title="President"
                value="Sukhbir Singh Badal"
                subtitle={`Re-elected ${sadStatusData.presidentReElection}`}
                color="amber"
              />
              <MetricCard
                title="2022 Assembly Seats"
                value="3"
                subtitle="Worst ever result"
                change={-87}
                trend="down"
                color="rose"
              />
              <MetricCard
                title="2024 LS Seats"
                value="1"
                subtitle="Bathinda only"
                change={-2}
                trend="down"
                color="rose"
              />
              <MetricCard
                title="BSP Alliance"
                value="Collapsed"
                subtitle="February 2024 - Going solo"
                color="orange"
              />
            </div>

            {/* Electoral Decline Mini Chart */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Electoral Decline Trajectory</h4>
                <div className="mt-4 flex items-end justify-between gap-2">
                  {sadStatusData.electoralDecline.map((item, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center">
                      <div
                        className="w-full rounded-t bg-rose-400 dark:bg-rose-600"
                        style={{ height: `${(100 / (i + 1))}px` }}
                      />
                      <p className="mt-2 text-center text-xs font-medium text-slate-600 dark:text-slate-400">
                        {item.seats ? `${item.seats} seats` : item.voteShare}
                      </p>
                      <p className="text-center text-xs text-slate-500">{item.election}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-500"> Tarn Taran By-poll: 25.97% vote share</p>
              </div>

              {/* Key Leaders */}
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Key Leaders</h4>
                <div className="mt-3 space-y-3">
                  {sadStatusData.keyLeaders.map((leader, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border border-slate-100 p-2 dark:border-slate-700">
                      <div>
                        <p className="font-medium text-slate-700 dark:text-slate-300">{leader.name}</p>
                        <p className="text-xs text-slate-500">{leader.seat || leader.status}</p>
                      </div>
                      <Badge variant={leader.name.includes("Bikram") ? "warning" : "info"}>
                        {leader.note}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Faction Analysis */}
            <div className="mt-6">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100">Akali Fragmentation (5 Active Entities)</h4>
              <div className="mt-3 grid gap-3 md:grid-cols-5">
                {sadStatusData.factions.map((faction, i) => (
                  <div key={i} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{faction.name}</span>
                      <Badge variant={faction.status === "Official" ? "success" : faction.status === "Faction" ? "warning" : "default"}>
                        {faction.status}
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{faction.leader}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Panthic Issues */}
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-100/50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200">Panthic Credibility Crisis</h4>
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                  <p className="text-xs text-slate-500">Akal Takht Action</p>
                  <p className="mt-1 text-sm font-medium text-rose-600">{sadStatusData.panthicIssues.akalTakhtAction}</p>
                </div>
                <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                  <p className="text-xs text-slate-500">SGPC Control</p>
                  <p className="mt-1 text-sm font-medium text-orange-600">{sadStatusData.panthicIssues.sgpcControl}</p>
                </div>
                <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                  <p className="text-xs text-slate-500">Overall Impact</p>
                  <p className="mt-1 text-sm font-medium text-rose-600">{sadStatusData.panthicIssues.impact}</p>
                </div>
              </div>
            </div>

            {/* Mini Chart: Vote Share Trend */}
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Vote Share Trend</h4>
                <div className="mt-4">
                  <MiniChart
                    data={[40, 38, 35, 32, 28, 26]}
                    color="amber"
                    height={60}
                  />
                  <div className="mt-2 flex justify-between text-xs text-slate-500">
                    <span>2017</span>
                    <span>2022</span>
                    <span>2024 LS</span>
                    <span>Tarn Taran</span>
                  </div>
                </div>
              </div>

              {/* Congress vs SAD vs AAP comparison */}
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">2024 LS Vote Share (Punjab)</h4>
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Congress</span>
                      <span className="font-medium text-blue-600">26.30%</span>
                    </div>
                    <ProgressBar label="" value={26.3} color="blue" showPercentage={false} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">AAP</span>
                      <span className="font-medium text-rose-600">41.20%</span>
                    </div>
                    <ProgressBar label="" value={41.2} color="rose" showPercentage={false} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">SAD</span>
                      <span className="font-medium text-amber-600">21.80%</span>
                    </div>
                    <ProgressBar label="" value={21.8} color="amber" showPercentage={false} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">BJP</span>
                      <span className="font-medium text-orange-600">18.56%</span>
                    </div>
                    <ProgressBar label="" value={18.56} color="amber" showPercentage={false} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
