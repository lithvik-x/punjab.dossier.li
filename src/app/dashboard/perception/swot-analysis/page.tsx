"use client";

import { Badge, MetricCard } from "@/components/ui/MetricCard";

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
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
              🎯
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              SWOT Analysis
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Congress strengths, weaknesses, opportunities, and threats
          </p>
        </div>
        <Badge variant="info">Congress-Verified</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Strategy Phases"
          value="4"
          subtitle="Campaign timeline"
          color="bg-rose-500"
        />
        <MetricCard
          title="Narrative Pillars"
          value="5"
          subtitle="Core messaging"
          color="bg-blue-500"
        />
        <MetricCard
          title="Message Recall"
          value="58%"
          subtitle="Voter awareness"
          change={12}
          trend="up"
          color="bg-green-500"
        />
        <MetricCard
          title="Narrative Ownership"
          value="62%"
          subtitle="Congress-owned topics"
          change={8}
          trend="up"
          color="bg-purple-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
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
                <li>"B-Team of BJP" narrative (AAP defections)</li>
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
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
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
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Key Narrative Messages
        </h3>
        <div className="mt-4 space-y-3">
          <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500 dark:bg-blue-900/20">
            <p className="font-medium text-blue-700 dark:text-blue-400">"Drugs: Our War, Our Victory"</p>
            <p className="mt-1 text-sm text-blue-600 dark:text-blue-300">Positioning Congress as the only party serious about drug eradication</p>
          </div>
          <div className="p-3 rounded-lg bg-green-50 border-l-4 border-green-500 dark:bg-green-900/20">
            <p className="font-medium text-green-700 dark:text-green-400">"Farmers: Congress Stands With You"</p>
            <p className="mt-1 text-sm text-green-600 dark:text-green-300">Recall Congress role in farm laws repeal, MSP guarantee</p>
          </div>
          <div className="p-3 rounded-lg bg-purple-50 border-l-4 border-purple-500 dark:bg-purple-900/20">
            <p className="font-medium text-purple-700 dark:text-purple-400">"Youth: Jobs, Not Excuses"</p>
            <p className="mt-1 text-sm text-purple-600 dark:text-purple-300">Contrast AAP broken promises with Congress action plan</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Counter-Narrative Responses
        </h3>
        <div className="mt-4 space-y-3">
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p className="font-medium text-slate-700 dark:text-slate-300">If raised: "Congress also didn't solve drugs"</p>
            <p className="mt-1 text-sm text-slate-500">Response: "We've arrested 45K, built de-addiction centers,追击 supply chains"</p>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p className="font-medium text-slate-700 dark:text-slate-300">If raised: "2022 loss = rejection"</p>
            <p className="mt-1 text-sm text-slate-500">Response: "People elect local MLAs, not national trends"</p>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p className="font-medium text-slate-700 dark:text-slate-300">If raised: "No development in 5 years"</p>
            <p className="mt-1 text-sm text-slate-500">Response: "Congress governments in 3 big states delivering, wait for Feb"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
