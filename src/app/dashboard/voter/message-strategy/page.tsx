"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";

const messageArchitecture = [
  { appealType: "Emotional-Anger", description: "Injustice identification, perpetrator attribution, righteous anger activation", example: "For 5 years, they watched our youth die from drugs. Every farm loan waiver was a promise broken." },
  { appealType: "Rational", description: "Problem data, solution specificity, implementation mechanism", example: "Congress promises Rs 500/quintal MSP increase. Additional Rs 25,000 annually for a 5-acre farmer." },
  { appealType: "Emotional-Hope", description: "Vision of positive future, path to achievement, collective transformation", example: "Imagine a Punjab where our children don't have to leave for Delhi. Where jobs are waiting at home." },
  { appealType: "Identity", description: "Identity recognition, group solidarity, collective interest framing", example: "A vote for our candidate is a vote for Mazhabi pride. We are 32% of Punjab - together we are powerful." },
  { appealType: "Fear", description: "Threat identification, probability assessment, consequence amplification", example: "If BJP wins, drugs will increase. Your land will be taken for SYL. Reservation will be diluted." },
  { appealType: "Moral", description: "Ethical principle statement, moral duty framing, integrity expectation", example: "Your vote is not just a choice, it's a responsibility. Vote for integrity. Vote for those who cannot vote for themselves." },
];

const deraNetworks = [
  { name: "Dera Sacha Sauda (Sirsa)", followerBase: "Cross-caste, Haryana-strong", politicalAlignment: "Historically Congress", engagement: "Direct engagement with derasar" },
  { name: "Dera Sachkhand Ballan", followerBase: "Majha region, Ravidasia community", politicalAlignment: "Shifts between parties", engagement: "Community events, Doaba concentrated" },
  { name: "Radha Soami Beas", followerBase: "Educated, urban", politicalAlignment: "A-political but network effect", engagement: "Service-oriented engagement" },
];

const deraPoliticalImpact = {
  totalDeras: "9,000+",
  concentrationArea: "Doaba region (23 assembly seats)",
  scVoterConcentration: "39% in Jalandhar (SC reserved)",
  donationInfluence: "90% of donations in dera areas",
  voterDelivery: "Bloc votes on direction from Dera head",
};

export default function MessageStrategyPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
              5
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Message Strategy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Message architecture, appeal types, and Dera network influence
          </p>
        </div>
        <Badge variant="success">6 Appeal Types</Badge>
      </div>

      {/* Message Architecture */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Message Architecture - Appeal Types
        </h3>
        <p className="text-sm text-slate-500">From b13-voter-psychology-influence-methodology</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {messageArchitecture.map((msg) => (
            <div key={msg.appealType} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
              <span className="inline-block rounded bg-pink-100 px-2 py-1 text-xs font-bold text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
                {msg.appealType}
              </span>
              <p className="mt-2 text-xs text-slate-500">{msg.description}</p>
              <p className="mt-2 rounded bg-slate-50 p-2 text-xs italic text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                &ldquo;{msg.example.substring(0, 80)}...&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dera Networks */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Dera Networks - Political Influence
          </h3>
          <p className="text-sm text-slate-500">From a23-punjab-nri-political-influence-2026, b13-voter-psychology-influence-methodology</p>
          <div className="mt-4 space-y-3">
            {deraNetworks.map((dera) => (
              <div key={dera.name} className="rounded-lg border border-slate-100 p-3 dark:border-slate-700">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{dera.name}</span>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="text-xs">
                    <span className="text-slate-400">Followers: </span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">{dera.followerBase}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-400">Alignment: </span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">{dera.politicalAlignment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded bg-purple-50 p-3 dark:bg-purple-900/20">
            <p className="text-sm font-bold text-purple-700 dark:text-purple-400">Dera Political Impact:</p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              <span>Total Deras: <strong>{deraPoliticalImpact.totalDeras}</strong></span>
              <span>SC in Jalandhar: <strong>{deraPoliticalImpact.scVoterConcentration}</strong></span>
              <span>Concentration: <strong>{deraPoliticalImpact.concentrationArea}</strong></span>
              <span>Donation Influence: <strong>{deraPoliticalImpact.donationInfluence}</strong></span>
            </div>
          </div>
        </div>

        {/* Counter-Narrative Framework */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Counter-Narrative Framework
          </h3>
          <p className="text-sm text-slate-500">From b13-voter-psychology-influence-methodology</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
              <p className="text-xs font-bold text-red-700 dark:text-red-400">AAP Promise: &quot;Drug-free Punjab in 1 month&quot;</p>
              <p className="mt-1 text-xs text-slate-600">Reality: 232,000+ opioid dependent (AIIMS 2025)</p>
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-800 dark:bg-orange-900/20">
              <p className="text-xs font-bold text-orange-700 dark:text-orange-400">AAP Promise: &quot;10 lakh jobs&quot;</p>
              <p className="mt-1 text-xs text-slate-600">Reality: Youth unemployment rose to 22.5%</p>
            </div>
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
              <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400">AAP Promise: &quot;MSP guarantee&quot;</p>
              <p className="mt-1 text-xs text-slate-600">Reality: Not legislated in 2 years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Voter Value Clusters */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voter Value Clusters
        </h3>
        <div className="mt-6 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
            <span className="text-lg font-bold text-blue-600">35%</span>
            <span className="text-xs">Traditionalist (Religion, panthic identity)</span>
          </div>
          <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
            <span className="text-lg font-bold text-green-600">25%</span>
            <span className="text-xs">Modernist (Jobs, economy, anti-corruption)</span>
          </div>
          <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
            <span className="text-lg font-bold text-red-600">20%</span>
            <span className="text-xs">Survivalist (Drug crisis, law & order)</span>
          </div>
          <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
            <span className="text-lg font-bold text-purple-600">12%</span>
            <span className="text-xs">Cynic (Anti-establishment, NOTA)</span>
          </div>
          <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
            <span className="text-lg font-bold text-orange-600">5%</span>
            <span className="text-xs">Activist (Farmer unions, social movements)</span>
          </div>
          <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
            <span className="text-lg font-bold text-pink-600">3%</span>
            <span className="text-xs">Identity Warrior (Dalit empowerment)</span>
          </div>
        </div>
      </div>

      {/* Issue Salience Hierarchy */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Issue Salience Hierarchy 2027
        </h3>
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">1</span>
            <span className="flex-1 text-sm font-medium">DRUG ERADICATION</span>
            <span className="text-xs text-red-600 font-semibold">CRITICAL ~85%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">2</span>
            <span className="flex-1 text-sm font-medium">EMPLOYMENT/YOUTH JOBS</span>
            <span className="text-xs text-orange-600 font-semibold">CRITICAL ~80%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white">3</span>
            <span className="flex-1 text-sm font-medium">MSP/FARMER WELFARE</span>
            <span className="text-xs text-yellow-600 font-semibold">HIGH ~75%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">4</span>
            <span className="flex-1 text-sm font-medium">GOVERNANCE/CORRUPTION</span>
            <span className="text-xs text-purple-600 font-semibold">HIGH ~70%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
