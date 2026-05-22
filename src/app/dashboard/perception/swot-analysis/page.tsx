"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, MetricCard } from "@/components/ui/MetricCard";
import { Target } from "lucide-react";

export default function SwotAnalysisPage() {
  const narrativePillars = [
    { pillar: "Drugs Eradication", sentiment: 0.72, reach: "89%", owned: true },
    { pillar: "Farmer Welfare", sentiment: 0.58, reach: "82%", owned: false },
    { pillar: "Youth Employment", sentiment: 0.45, reach: "78%", owned: true },
    { pillar: "Healthcare", sentiment: 0.52, reach: "71%", owned: true },
    { pillar: "Good Governance", sentiment: 0.38, reach: "65%", owned: false },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg">
              <Target className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              SWOT Analysis
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Congress strengths, weaknesses, opportunities, and threats
          </p>
        </div>
        <Badge variant="info">Congress-Verified</Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid gap-6 md:grid-cols-4"
      >
        <MetricCard
          title="Strategy Phases"
          value="4"
          subtitle="Campaign timeline"
          color="rose"
        />
        <MetricCard
          title="Narrative Pillars"
          value="5"
          subtitle="Core messaging"
          color="blue"
        />
        <MetricCard
          title="Message Recall"
          value="58%"
          subtitle="Voter awareness"
          change={12}
          trend="up"
          color="emerald"
        />
        <MetricCard
          title="Narrative Ownership"
          value="62%"
          subtitle="Congress-owned topics"
          change={8}
          trend="up"
          color="purple"
        />
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Congress SWOT Analysis (Research-Verified)
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <h4 className="font-semibold text-green-700 dark:text-green-400">Strengths</h4>
                <ul className="mt-2 space-y-1 text-sm text-green-600 dark:text-green-300">
                  <li>Legacy in Punjab (2017: 77 seats)</li>
                  <li>Dalit vote bank (Channi card)</li>
                  <li>Farmer community connect</li>
                  <li>Anti-SAD sentiment</li>
                  <li>Collective leadership (no CM face)</li>
                </ul>
              </div>
              <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                <h4 className="font-semibold text-red-700 dark:text-red-400">Weaknesses</h4>
                <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
                  <li>Seats collapsed: 77 (2017) to 7 (2024 LS)</li>
                  <li>No CM candidate = leadership vacuum</li>
                  <li>Factionalism (Bajwa vs Sidhu)</li>
                  <li>Youth disenchantment</li>
                  <li>2022 loss still weighs</li>
                </ul>
              </div>
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-700 dark:text-blue-400">Opportunities</h4>
                <ul className="mt-2 space-y-1 text-sm text-blue-600 dark:text-blue-300">
                  <li>AAP broken promises (drugs, jobs)</li>
                  <li>SAD-BJP alliance broken (March 2026)</li>
                  <li>SAD split (August 2025)</li>
                  <li>&quot;B-Team of BJP&quot; narrative (AAP defections)</li>
                </ul>
              </div>
              <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
                <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Threats</h4>
                <ul className="mt-2 space-y-1 text-sm text-yellow-600 dark:text-yellow-300">
                  <li>BJP rising: 6.6% to 18.56% (2022 to 2024)</li>
                  <li>Money power (BJP: Rs 6,074 Cr war chest)</li>
                  <li>Gangster networks (Lawrence Bishnoi)</li>
                  <li>No digital narrative vs AAP</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Narrative Ownership
            </h3>
            <div className="mt-6 space-y-4">
              {narrativePillars.map((pillar) => (
                <div key={pillar.pillar}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{pillar.pillar}</span>
                      {pillar.owned && <Badge variant="success">Owned</Badge>}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500">{pillar.reach} reach</span>
                      <Badge variant={pillar.sentiment > 0.5 ? "success" : "info"}>
                        +{pillar.sentiment}
                      </Badge>
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className={`h-2 rounded-full ${pillar.owned ? "bg-green-500" : "bg-slate-400"}`}
                      style={{ width: `${pillar.sentiment * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Key Narrative Messages
          </h3>
          <div className="mt-4 space-y-3">
            <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500 dark:bg-blue-900/20">
              <p className="font-medium text-blue-700 dark:text-blue-400">&quot;Drugs: Our War, Our Victory&quot;</p>
              <p className="mt-1 text-sm text-blue-600 dark:text-blue-300">Positioning Congress as the only party serious about drug eradication</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border-l-4 border-green-500 dark:bg-green-900/20">
              <p className="font-medium text-green-700 dark:text-green-400">&quot;Farmers: Congress Stands With You&quot;</p>
              <p className="mt-1 text-sm text-green-600 dark:text-green-300">Recall Congress role in farm laws repeal, MSP guarantee</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 border-l-4 border-purple-500 dark:bg-purple-900/20">
              <p className="font-medium text-purple-700 dark:text-purple-400">&quot;Youth: Jobs, Not Excuses&quot;</p>
              <p className="mt-1 text-sm text-purple-600 dark:text-purple-300">Contrast AAP broken promises with Congress action plan</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Counter-Narrative Responses
          </h3>
          <div className="mt-4 space-y-3">
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="font-medium text-slate-700 dark:text-slate-300">If raised: &quot;Congress also didn&apos;t solve drugs&quot;</p>
              <p className="mt-1 text-sm text-slate-500">Response: &quot;We&apos;ve arrested 45K, built de-addiction centers, supply chains&quot;</p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="font-medium text-slate-700 dark:text-slate-300">If raised: &quot;2022 loss = rejection&quot;</p>
              <p className="mt-1 text-sm text-slate-500">Response: &quot;People elect local MLAs, not national trends&quot;</p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="font-medium text-slate-700 dark:text-slate-300">If raised: &quot;No development in 5 years&quot;</p>
              <p className="mt-1 text-sm text-slate-500">Response: &quot;Congress governments in 3 big states delivering, wait for Feb&quot;</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
