"use client";

import { MetricCard, Badge, ProgressBar } from "@/components/ui/MetricCard";

// Vote share trajectory
const voteShareData = [
  { year: "2017 Assembly", share: 6.6, note: "Alliance with SAD (part of 23-yr pact)" },
  { year: "2019 Lok Sabha", share: 9.63, note: "Alliance with SAD; won 2 of 13 LS seats" },
  { year: "2022 Assembly", share: 6.6, note: "Alliance with SAD; won 2/117 seats" },
  { year: "2024 Lok Sabha", share: 18.56, note: "Solo; 0/13 seats but 3x vote share surge" }
];

// Strongest assembly segments (Hindustan Times June 2024)
const topBjpSegments = [
  "Abohar", "Balluana", "Jalandhar Central", "Jalandhar North",
  "Rajpura", "Dera Bassi", "Patiala", "Ludhiana East",
  "Ludhiana South", "Ludhiana Central", "Ludhiana North", "Ludhiana West",
  "Amritsar Central", "Amritsar East", "Ferozepur City", "Mukerian",
  "Dasuya", "Hoshiarpur", "Sujanpur", "Bhoa", "Pathankot", "Bathinda Urban"
];

// Key leaders - from BJP Punjab state unit
const keyLeaders = [
  { name: "Sunil Jakhar", role: "State President", since: "July 2023", previous: "Former Congress Punjab chief; Hindu Jat face" },
  { name: "Ashwani Sharma", role: "Working President", since: "July 2025", previous: "Pathankot MLA; 4th term as working president" },
  { name: "Amarinder Singh", role: "Former CM (Joined BJP)", since: "2021", previous: "2-term Congress CM (2002-07, 2017-21)" },
  { name: "Ravneet Singh Bittu", role: "Union Minister", since: "2024", previous: "Congress MP from Ludhiana" },
  { name: "Sushil Kumar Rinku", role: "Sitting MP (Joined)", since: "2024", previous: "AAP MP from Jalandhar" },
  { name: "Manjinder Singh Sirsa", role: "Senior Leader", since: "2024", previous: "SAD leader; joined BJP" }
];

// RSS infrastructure data
const rssInfrastructure = [
  { label: "Swayamsevaks", value: "1,700+", note: "Core RSS cadre in Punjab" },
  { label: "Shakhas", value: "41+", note: "Locations across urban centres" },
  { label: "Organisational Mandals", value: "600+", note: "Booth-level coverage" },
  { label: "Shakti Kendras", value: "Booth-level", note: "Micro-organisation grid" },
  { label: "Vidya Bharati Schools", value: "150+", note: "7,000-8,000 students enrolled" },
];

// 5-Point Victory Plan (RSS-driven)
const victoryPlan = [
  { title: "Samrasta Abhiyan", desc: "Shared cremation grounds campaign targeting 250 villages to build inter-community trust" },
  { title: "Ram Tradition Link", desc: "Valmiki Tirth promotion, Valmiki Ramayan distribution, Luv-Kush narrative for Dalit outreach" },
  { title: "Sant Ravidas Celebrations", desc: "650th Birth Anniversary (June 2026-June 2027) celebrated at block level across Doaba" },
  { title: "Dalit Saints Network", desc: "4-year project developing saint-based narrative delivery mechanism for SC communities" },
  { title: "Ghar Wapsi", desc: "Homecoming campaign framed around discrimination as cause of religious conversion" }
];

// Defectors who joined BJP (Frontline Feb 2026 analysis)
const defectorsTimeline = [
  { year: "2021", names: "Captain Amarinder Singh, Sunil Jakhar", from: "Congress" },
  { year: "2022", names: "Arvind Khanna, Parampal Kaur", from: "Congress/SAD" },
  { year: "2023", names: "Daman Thind Bajwa", from: "Congress" },
  { year: "2024", names: "Sushil Rinku, Manjinder Singh Sirsa, Ravneet Bittu", from: "AAP/SAD/Congress" },
  { year: "2025", names: "Jagdeep Cheema, Inder Iqbal Singh", from: "SAD" },
];

export default function BJPStatusPage() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
          B
        </span>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            BJP Punjab — Party Intelligence
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Organisational structure, war chest, strategy analysis, district-wise strength
          </p>
        </div>
      </div>

      {/* BREAKING - Going Solo Alert */}
      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">BJP Going Solo 2027 — Confirmed March 2026</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">
              Amit Shah declared BJP will contest all 117 seats independently. Alliance with SAD (1997-2020) permanently dissolved.
              23-year partnership replaced by solo expansion strategy.
            </p>
          </div>
        </div>
      </div>

      {/* CORE METRICS */}
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard
          title="Vote Share 2024 LS"
          value="18.56%"
          subtitle="Up from 6.6% in 2022 Assembly (+182%)"
          change={182}
          trend="up"
          color="bg-orange-500"
        />
        <MetricCard
          title="Assembly Seats"
          value="2 / 117"
          subtitle="Won 2 in 2022 (Mukerian, Pathankot)"
          change={0}
          trend="neutral"
          color="bg-orange-500"
        />
        <MetricCard
          title="Lok Sabha 2024"
          value="0 / 13"
          subtitle="Drew blank despite 18.56% vote share"
          color="bg-red-500"
        />
        <MetricCard
          title="Target 2027"
          value="25-30%"
          subtitle="Vote share ambition; Amit Shah projection"
          color="bg-blue-500"
        />
      </div>

      {/* VOTE SHARE TRAJECTORY */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Vote Share Trajectory — The 3x Surge
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Sources: ECI, IndiaVotes, Hindustan Times, Indian Express (June 2024)
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {voteShareData.map((d) => (
            <div key={d.year} className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
              <p className="text-xs font-medium text-orange-600 dark:text-orange-300">{d.year}</p>
              <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">{d.share}%</p>
              <p className="mt-1 text-xs text-slate-500">{d.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-slate-100 p-3 dark:bg-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Key Insight:</strong> BJP&apos;s 2024 surge was driven by <strong>Hindu vote polarisation</strong> in urban/semi-urban areas — a counter-consolidation against farmer protest disruptions. Party led in 23 of 117 assembly segments and crossed 20,000 votes in 46 segments despite winning zero Lok Sabha seats.
          </p>
        </div>
      </div>

      {/* ORGANISATIONAL STRUCTURE */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">
          Organisational Structure
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          36 organisational districts — 21 new district presidents elected August 2025
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <MetricCard
            title="State President"
            value="Sunil Jakhar"
            subtitle="Appointed July 2023; Hindu Jat face from Abohar"
            color="bg-orange-500"
          />
          <MetricCard
            title="Working President"
            value="Ashwani Sharma"
            subtitle="Appointed July 2025; Pathankot MLA; 4th term"
            color="bg-orange-500"
          />
          <MetricCard
            title="Punjab Incharge"
            value="BL Santosh"
            subtitle="National Gen. Secretary (Org); key strategist"
            color="bg-orange-500"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Organisational Districts</p>
            <p className="text-2xl font-bold text-orange-600">36</p>
            <p className="text-xs text-slate-500">Some revenue districts have multiple org districts</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">New District Presidents</p>
            <p className="text-2xl font-bold text-orange-600">21 (Aug 2025)</p>
            <p className="text-xs text-slate-500">Elected unopposed; trigger for state president election</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">State Org. Mandals</p>
            <p className="text-2xl font-bold text-orange-600">600+</p>
            <p className="text-xs text-slate-500">Booth-level mandal infrastructure</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-orange-200 bg-orange-100/50 p-3 dark:border-orange-800 dark:bg-orange-900/20">
          <p className="text-sm font-medium text-orange-600">Defection-Driven Expansion Model</p>
          <p className="mt-1 text-xs text-slate-600">
            Unlike AAP (volunteer-built) or Congress (inherited networks), BJP Punjab is building through elite poaching.
            Since 2021, 15+ sitting/former MLAs and MPs from Congress, SAD, and AAP have joined BJP.
            <strong> Risk:</strong> No organic grassroots cadre in rural Sikh-majority areas; over-reliance on outsourced
            leaders creates ideological incoherence (Frontline, Feb 2026).
          </p>
        </div>

        {/* Defectors Timeline */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-orange-700 dark:text-orange-400 mb-2">Defector Intake Timeline</h4>
          <div className="grid gap-2 md:grid-cols-5">
            {defectorsTimeline.map((dt) => (
              <div key={dt.year} className="rounded-lg bg-white p-3 text-xs shadow-sm dark:bg-slate-800">
                <span className="font-bold text-orange-600">{dt.year}</span>
                <p className="mt-1 text-slate-600 dark:text-slate-300">{dt.names}</p>
                <p className="text-slate-400">from {dt.from}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KEY LEADERS */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Key Leaders
        </h3>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {keyLeaders.map((l) => (
            <div key={l.name} className="flex items-start gap-3 rounded-lg border border-orange-100 bg-orange-50/50 p-3 dark:border-orange-800 dark:bg-orange-900/10">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                {l.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200">{l.name}</p>
                <p className="text-xs text-orange-600 dark:text-orange-300">{l.role} (since {l.since})</p>
                <p className="mt-1 text-xs text-slate-500">{l.previous}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-slate-100 p-3 text-xs dark:bg-slate-700">
          <p className="text-slate-600 dark:text-slate-300">
            <strong>Leadership Gap:</strong> No mass-level Sikh leader emerged despite high-profile defections.
            Sunil Jakhar is a Hindu Jat, Ashwani Sharma a Hindu Rajput, Amarinder Singh a Sikh royal but past electoral prime.
            Party lacks organic Sikh face in rural Sikh-majority belts.
          </p>
        </div>
      </div>

      {/* RSS NETWORK */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
          RSS Network & Organisational Infrastructure
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          RSS provides the organisational backbone BJP lacks organically in Punjab
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-5">
          {rssInfrastructure.map((item) => (
            <div key={item.label} className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-300">{item.label}</p>
              <p className="text-xl font-bold text-purple-700 dark:text-purple-400">{item.value}</p>
              <p className="text-xs text-slate-500">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="mb-3 text-sm font-semibold text-purple-700 dark:text-purple-400">Five Point Victory Plan (RSS-Designed)</h4>
          <div className="space-y-2">
            {victoryPlan.map((plan, i) => (
              <div key={plan.title} className="flex items-start gap-3 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">{plan.title}</p>
                  <p className="text-xs text-slate-500">{plan.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-purple-200 bg-purple-100/50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
          <p className="text-sm font-medium text-purple-600">Dalit + OBC Outreach Target</p>
          <p className="mt-1 text-xs text-slate-600">
            Punjab has 32% SC population (highest in India) and 31% OBC population. BJP&apos;s Dalit Saints Network +
            Sant Ravidas anniversary campaign targets Dalit vote fragmentation away from Congress/AAP.
            Reserved seats: 34 of 117 assembly constituencies.
          </p>
        </div>
      </div>

      {/* WAR CHEST */}
      <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
        <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">
          Financial War Chest
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          National-level financial dominance; 93% of Punjab donations captured
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="BJP National Donations"
            value="₹6,074 Cr"
            subtitle="FY 2024-25; 5,522 donations via Form 24A"
            color="bg-yellow-500"
          />
          <MetricCard
            title="BJP Punjab Donations"
            value="₹60.30 Cr"
            subtitle="93% of total Rs 64.74 Cr donated in Punjab (2024-25)"
            color="bg-yellow-500"
          />
          <MetricCard
            title="AAP Punjab Donations"
            value="₹0.71 Cr"
            subtitle="Just 1.1% of Punjab donations; vastly outspent"
            color="bg-red-500"
          />
          <MetricCard
            title="Congress Punjab Donations"
            value="₹3.73 Cr"
            subtitle="5.8% of Punjab donations (2024-25)"
            color="bg-blue-500"
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Corporate Share</p>
            <p className="text-2xl font-bold text-yellow-600">88%</p>
            <p className="text-xs text-slate-500">Rs 57.10 Cr from corporate/business houses of total Rs 64.74 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">BJP Cash & Equivalents (National)</p>
            <p className="text-2xl font-bold text-yellow-600">~₹4,500 Cr</p>
            <p className="text-xs text-slate-500">Audited annual report; Indian Express Jan 2026</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">2024 LS Election Spend</p>
            <p className="text-2xl font-bold text-yellow-600">₹1,738 Cr</p>
            <p className="text-xs text-slate-500">BJP national LS 2024 spending; highest ever by any party</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-100/50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
          <p className="text-sm font-medium text-yellow-600">Implication for Punjab 2027</p>
          <p className="mt-1 text-xs text-slate-600">
            BJP nationally outspent Congress ~4:1 in 2024-25 (Rs 6,074 Cr vs Rs ~500 Cr). With 93% donation capture in Punjab,
            BJP can deploy vastly superior resources vs AAP (Rs 71 lakh) and Congress (Rs 3.73 Cr). Yet Punjab is a
            high-expenditure state — spending on ads, rallies, and voter outreach will be critical.
          </p>
        </div>
      </div>

      {/* DISTRICT-WISE STRENGTH MAP */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
          District-Wise Strength & Key Constituencies
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          BJP led in 23/117 assembly segments in 2024 LS; strong in 35+ Hindu/urban segments
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">Top 22 Urban Hindu Strongholds</h4>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {topBjpSegments.map((s) => (
                <span key={s} className="rounded bg-green-100 px-2 py-1 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">Source: Hindustan Times assembly-wise analysis (June 2024)</p>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">Border Districts — Strategic Focus</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span>Pathankot</span><span className="font-medium text-green-600">Strongest — BJP ahead in all segments</span></div>
              <div className="flex justify-between"><span>Gurdaspur</span><span className="font-medium text-green-600">Strong — over 20,000 votes; LS seat lost narrowly</span></div>
              <div className="flex justify-between"><span>Hoshiarpur</span><span className="font-medium text-green-600">Incumbent LS seat lost but strong vote share</span></div>
              <div className="flex justify-between"><span>Ferozepur</span><span className="font-medium text-green-600">City segment strong; rural weak</span></div>
              <div className="flex justify-between"><span>Amritsar</span><span className="font-medium text-green-600">Central/East segments strong; rural weak</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Gained leads in</p>
            <p className="text-2xl font-bold text-green-600">23 segments</p>
            <p className="text-xs text-slate-500">Out of 117 assembly segments (2024 LS)</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Crossed 20,000 votes in</p>
            <p className="text-2xl font-bold text-green-600">46 segments</p>
            <p className="text-xs text-slate-500">Demonstrates broad-based urban reach</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Urban segments outperformed</p>
            <p className="text-2xl font-bold text-green-600">35+</p>
            <p className="text-xs text-slate-500">Hindu/urban/semi-urban dominated constituencies</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-green-200 bg-green-100/50 p-3 dark:border-green-800 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-600">Rural Weakness — The Sikh Belt Gap</p>
          <p className="mt-1 text-xs text-slate-600">
            BJP is virtually absent in Sikh-dominated rural areas of Malwa (Bathinda Rural, Muktsar, Faridkot, Barnala)
            and Majha (Tarn Taran, Amritsar Rural, Gurdaspur Rural). In Khadoor Sahib (Panthic seat), BJP candidate
            Manjit Manna still outpolled SAD in Patti, Kapurthala, Sultanpur Lodhi — showing Sikh voter fragmentation
            between Congress, AAP, and SAD benefits BJP as third/fourth option.
          </p>
        </div>
      </div>

      {/* STRATEGY ANALYSIS */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
        <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">
          Strategy Analysis — The Long Game
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Booth-level construction, caste outreach, Sikh symbolism, elite poaching
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">Strengths</h4>
            <ul className="mt-2 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex gap-2"><span className="text-indigo-500">&#9656;</span>Massive financial advantage — 93% of Punjab donations</li>
              <li className="flex gap-2"><span className="text-indigo-500">&#9656;</span>RSS provides booth-level cadre BJP lacks organically</li>
              <li className="flex gap-2"><span className="text-indigo-500">&#9656;</span>Urban Hindu vote consolidated and growing (35+ strong segments)</li>
              <li className="flex gap-2"><span className="text-indigo-500">&#9656;</span>High-profile defections weakening rivals simultaneously</li>
              <li className="flex gap-2"><span className="text-indigo-500">&#9656;</span>National government leverage + central schemes messaging</li>
              <li className="flex gap-2"><span className="text-indigo-500">&#9656;</span>National IT cell of 1.5L workers; largest WhatsApp army</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="text-sm font-semibold text-red-600">Weaknesses</h4>
            <ul className="mt-2 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex gap-2"><span className="text-red-500">&#9656;</span>No organic rural presence in Sikh-majority belts</li>
              <li className="flex gap-2"><span className="text-red-500">&#9656;</span>Over-reliance on defectors with weak ideological commitment</li>
              <li className="flex gap-2"><span className="text-red-500">&#9656;</span>Zero LS seats despite 18.56% — first-past-the-post disadvantage</li>
              <li className="flex gap-2"><span className="text-red-500">&#9656;</span>No mass-level Sikh face in leadership</li>
              <li className="flex gap-2"><span className="text-red-500">&#9656;</span>Farmer protest hangover in rural Malwa/Majha</li>
              <li className="flex gap-2"><span className="text-red-500">&#9656;</span>&quot;Welcome all&quot; approach creates ideological incoherence (Frontline)</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">Alliance Status</p>
            <Badge variant="success">SOLO — Confirmed</Badge>
            <p className="mt-2 text-xs text-slate-500">Amit Shah announcement March 14, 2026. 23-year SAD alliance (1997-2020) permanently ended.</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">Model</p>
            <Badge variant="warning">HARYANA MODEL</Badge>
            <p className="mt-2 text-xs text-slate-500">Non-Jat consolidation: 70% non-Jat voter strategy targeting OBC (31%), SC (32%), and urban upper castes.</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">Central Message</p>
            <Badge variant="info">NATIONALISM + WELFARE</Badge>
            <p className="mt-2 text-xs text-slate-500">Modi guarantee, central schemes, Ram Mandir effect, anti-drug campaign, Sikh symbolism.</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-indigo-200 bg-indigo-100/50 p-3 dark:border-indigo-800 dark:bg-indigo-900/20">
          <p className="text-sm font-medium text-indigo-600">Bottom Line</p>
          <p className="mt-1 text-xs text-slate-600">
            BJP Punjab is building a long-term organisational infrastructure rather than chasing a single election win.
            The 2027 target of 25-30% vote share is realistic if urban Hindu consolidation holds and Dalit/OBC outreach
            gains traction. However, winning seats requires translating vote share into constituency-level victories —
            a challenge given the 18.56% → 0 LS seats outcome in 2024. A hung assembly scenario where BJP holds
            balance of power is the most plausible 2027 outcome if growth trajectory continues.
          </p>
        </div>
      </div>

      {/* ALLIANCE BREAKDOWN */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
          Alliance Breakdown — SAD Split March 2026
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          23-year alliance (1997-2020) permanently dissolved; SAD-BJP partnership defined Punjab politics for two decades
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Alliance Duration"
            value="1997-2020"
            subtitle="23 years; ended over farm laws 2020"
            color="bg-red-500"
          />
          <MetricCard
            title="BJP Go Solo"
            value="March 14, 2026"
            subtitle="Amit Shah declaration; all 117 seats"
            color="bg-red-500"
          />
          <MetricCard
            title="Post-Split SAD Vote"
            value="13.26%"
            subtitle="2024 LS vs BJP 18.56% — BJP now larger"
            color="bg-red-500"
          />
          <MetricCard
            title="SAD-BJP Rapprochment"
            value="NIL"
            subtitle="Sukhbir cosying up; BJP not interested"
            color="bg-red-500"
          />
        </div>

        <div className="mt-4 rounded-lg border border-red-200 bg-red-100/50 p-3 dark:border-red-800 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-600">Impact Assessment</p>
          <div className="mt-1 space-y-1 text-xs text-slate-600">
            <p>1. SAD reduced to 13.26% LS vote share (2024) — lowest ever — from alliance-era highs of 30%+.</p>
            <p>2. BJP overtook SAD as Punjab&apos;s third-largest party by vote share (18.56% vs 13.26%).</p>
            <p>3. SAD is now a weakened partner; BJP sees no electoral benefit from revival.</p>
            <p>4. SAD&apos;s rural Sikh base does not automatically transfer to BJP even if alliance revived.</p>
            <p>5. Both sides contesting separately ensures tri-cornered contests benefit Congress/AAP in rural seats.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
