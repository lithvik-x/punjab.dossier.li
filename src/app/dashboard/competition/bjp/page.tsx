"use client";

import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";

// BJP Growth Trajectory
const bjpGrowthData = [
  { election: "2017 Assembly", voteShare: 6.6, context: "Pre-growth baseline" },
  { election: "2022 Assembly", voteShare: 6.6, seats: 2, context: "Alliance with SAD" },
  { election: "2024 Lok Sabha", voteShare: 18.56, seats: 5, context: "Going solo, 3x growth" }
];

// BJP going solo 2027
const bjpSolo2027 = {
  status: "CONFIRMED",
  announcementDate: "March 14, 2026",
  spokesperson: "Amit Shah",
  statement: "BJP will contest all 117 seats independently",
  allianceHistory: "1997-2020 (23 years with SAD)"
};

// WhatsApp Army Data
const whatsAppArmies = [
  { party: "BJP", size: "8-10 lakh", reach: "Massive distribution network" },
  { party: "AAP", size: "4-5 lakh", reach: "Extensive grassroots" },
  { party: "Congress", size: "2-3 lakh", reach: "Limited penetration" },
  { party: "SAD", size: "1-2 lakh", reach: "Traditional networks" }
];

// RSS-BJP Connection
const rssBjpConnection = {
  rssPresence: {
    swayamsevaks: 1700,
    shakhas: "41+ locations",
    mandals: "600+",
    shaktiKendras: "Built for booth-level",
    vidyaBharatiSchools: "150+ schools, 7000-8000 students"
  },
  fivePointVictoryPlan: [
    { point: "Samrasta Abhiyan", desc: "Shared cremation grounds campaign - 250 villages targeted" },
    { point: "Ram Tradition Link", desc: "Valmiki Tirth, Valmiki Ramayan distribution, Luv-Kush narrative" },
    { point: "Sant Ravidas Celebrations", desc: "650th Birth Anniversary (June 2026-June 2027) at block level" },
    { point: "Dalit Saints Network", desc: "4-year development of saint network for narrative delivery" },
    { point: "Ghar Wapsi", desc: "Homecoming campaign focusing on discrimination causes of conversion" }
  ],
  dalitTargeting: {
    dalitPopulation: "32% of Punjab",
    reservedSeats: "34 of 117",
    strategy: "Cultural assertion into political alignment"
  }
};

// BJP Growth Metrics
const bjpGrowthMetrics = [
  { metric: "Vote Share 2022", value: "6.6%", context: "Assembly election result" },
  { metric: "Vote Share 2024", value: "18.6%", context: "Lok Sabha surge (3x growth)" },
  { metric: "Lok Sabha Seats 2024", value: "5/13", context: "BJP's best-ever Punjab performance" },
  { metric: "Mandals Established", value: "600+", context: "Organizational grid across Punjab" },
  { metric: "Target 2027", value: "25-30%", context: "Ambitious vote share target" },
  { metric: "OBC Outreach", value: "31%", context: "OBC population target (34 Lok Sabha seats)" },
  { metric: "Dalit Outreach", value: "32%", context: "SC population target" },
];

// Opposition IT & Social Media
const oppositionIT = {
  bjp: {
    itCellWorkers: 150000,
    nationalStructure: "5,000-6,000 core employees",
    itCellChief: "Amit Malviya (National Convener since 2015)",
    punjabPresence: "Expanding under Sunil Jakhar leadership"
  }
};

export default function BJPGrowthPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500 text-lg font-bold text-white">
          B
        </span>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            BJP Growth Trajectory
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            BJP Punjab growth, going solo 2027, organizational infrastructure
          </p>
        </div>
      </div>

      {/* Alert */}
      <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-yellow-700 dark:text-yellow-400">BJP Vote Share Triple: 6.6% → 18.6% (2024)</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">BJP tripled vote share from 2022 Assembly. Now Punjab&apos;s 3rd largest party. Amit Shah: &quot;wherever BJP gets 19%, next govt is BJP.&quot;</p>
          </div>
        </div>
      </div>

      {/* Core Metrics */}
      <div className="grid gap-6 lg:grid-cols-4">
        <MetricCard title="BJP Vote Share" value="18.6%" subtitle="Up from 6.6% in 2022" change={182} trend="up" color="bg-yellow-500" />
        <MetricCard title="BJP Lok Sabha 2024" value="5/13" subtitle="Best-ever Punjab result" change={400} trend="up" color="bg-yellow-500" />
        <MetricCard title="Mandals Established" value="600+" subtitle="Organizational grid" color="bg-orange-500" />
        <MetricCard title="Target 2027" value="25-30%" subtitle="Vote share target" color="bg-blue-500" />
      </div>

      {/* Growth Trajectory */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          BJP Growth Trajectory — Haryana Model Replication
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: BJP state unit reports, Amit Shah March 2026 announcement</p>
        <div className="mt-4 grid gap-4 md:grid-cols-7">
          {bjpGrowthMetrics.map((metric) => (
            <div key={metric.metric} className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <p className="text-xs text-slate-500 dark:text-slate-400">{metric.metric}</p>
              <p className="text-xl font-bold text-yellow-700 dark:text-yellow-400">{metric.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{metric.context}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            <strong>OBC Strategy:</strong> 31% OBC population targeted with caste coalition math. BJP&apos;s &quot;70% non-Jat&quot; voter strategy aims to replicate Haryana success. Dalit outreach at 32% SC population.
          </p>
        </div>
      </div>

      {/* Going Solo 2027 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          BJP Going Solo 2027 — Confirmed
        </h3>

        <div className="mt-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <div className="flex items-center gap-2">
            <Badge variant="success">CONFIRMED</Badge>
            <span className="font-semibold text-green-700 dark:text-green-400">March 14, 2026</span>
          </div>
          <p className="mt-2 text-sm text-green-600 dark:text-green-300">
            Amit Shah: &quot;BJP will contest all 117 seats independently&quot;
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Alliance history: {bjpSolo2027.allianceHistory}
          </p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Announcement Date</p>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-300">{bjpSolo2027.announcementDate}</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Spokesperson</p>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-300">{bjpSolo2027.spokesperson}</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Alliance Duration</p>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-300">{bjpSolo2027.allianceHistory}</p>
          </div>
        </div>
      </div>

      {/* RSS Connection */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          RSS-BJP Organizational Infrastructure
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">RSS Presence in Punjab</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Swayamsevaks</span>
                <span className="font-bold text-purple-600">1,700+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Shakhas</span>
                <span className="font-bold text-purple-600">41+ locations</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Mandals</span>
                <span className="font-bold text-purple-600">600+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Shakti Kendras</span>
                <span className="font-bold text-purple-600">Booth-level</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Vidya Bharati Schools</span>
                <span className="font-bold text-purple-600">150+</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">Dalit Targeting</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Dalit Population</span>
                <span className="font-bold text-orange-600">32%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Reserved Seats</span>
                <span className="font-bold text-orange-600">34 of 117</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Strategy: Cultural assertion into political alignment</p>
          </div>
        </div>

        {/* Five Point Victory Plan */}
        <div className="mt-4">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Five Point Victory Plan</h4>
          <div className="space-y-2">
            {rssBjpConnection.fivePointVictoryPlan.map((plan, index) => (
              <div key={plan.point} className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-white text-xs font-bold">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">{plan.point}</p>
                  <p className="text-xs text-slate-500">{plan.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BJP IT & Social Media */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          BJP IT & Social Media Infrastructure
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">BJP IT Cell</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">IT Cell Workers</span>
                <span className="font-bold text-purple-600">1,50,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">National Structure</span>
                <span className="font-bold text-purple-600">5,000-6,000 core</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">IT Cell Chief</span>
                <span className="font-bold text-purple-600">Amit Malviya</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Punjab Presence</span>
                <span className="font-bold text-purple-600">Expanding</span>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">Under Sunil Jakhar leadership</p>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">WhatsApp Army Comparison</h4>
            <div className="mt-3 space-y-2">
              {whatsAppArmies.map((army) => (
                <div key={army.party} className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-300">{army.party}</span>
                  <span className="font-medium text-yellow-600">{army.size}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">BJP has the largest WhatsApp network</p>
          </div>
        </div>
      </div>

      {/* Organizational Warfare */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Organizational Warfare — Party Infrastructure Comparison
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: MP3-005, MP3-007</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">AAP War Chest</h4>
            <p className="text-2xl font-bold text-red-600">Rs 200+ Cr</p>
            <p className="text-xs text-slate-500 mt-1">Central funds + state donors</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Congress War Chest</h4>
            <p className="text-2xl font-bold text-blue-600">Weaker</p>
            <p className="text-xs text-slate-500 mt-1">Relies on local leaders</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">BJP Swayamsevak Network</h4>
            <p className="text-2xl font-bold text-yellow-600">11 Lakh+</p>
            <p className="text-xs text-slate-500 mt-1">Largest grassroots org in India</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">AAP WhatsApp Groups</h4>
            <p className="text-2xl font-bold text-purple-600">15,000+</p>
            <p className="text-xs text-slate-500 mt-1">10-12 members per booth</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Congress Financial Deficit:</strong> AAP 2027 projected spending Rs 260-400 Cr vs Congress Rs 220-350 Cr. Congress relies on local leaders&apos; self-funding model — creates equity issues and limits war chest scalability. <strong>Source: MP3-005</strong>
          </p>
        </div>
      </div>

      {/* BJP Delhi Governance Attack */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          BJP&apos;s Delhi Governance Attack on AAP
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">AAP Delhi Record</h4>
            <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
              <li>• 70% school buses sold by AAP Delhi govt</li>
              <li>• Liquor policy lost 1000s Crores revenue</li>
              <li>• Water bill increased 3x in Delhi</li>
              <li>• &quot;Delhi model&quot; credibility gap nationally</li>
            </ul>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Impact on Punjab</h4>
            <ul className="mt-2 space-y-1 text-sm text-yellow-600 dark:text-yellow-300">
              <li>• 2024 Lok Sabha: AAP vote share collapsed 42% → 26%</li>
              <li>• Anti-AAP sentiment growing</li>
              <li>• Governance narrative shifting</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20 text-center">
            <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-400">3x</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">BJP vote share growth</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20 text-center">
            <p className="text-3xl font-bold text-orange-700 dark:text-orange-400">7</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">Rajya Sabha defections to BJP</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20 text-center">
            <p className="text-3xl font-bold text-red-700 dark:text-red-400">16%</p>
            <p className="text-sm text-red-600 dark:text-red-300">AAP vote share collapse</p>
          </div>
        </div>
      </div>
    </div>
  );
}
