"use client";

import { MetricCard, Badge } from "@/components/ui/MetricCard";

// ============================================================
// BJP LEADERSHIP (Verified via minimax-web search May 2026)
// ============================================================

const coreLeaders = [
  {
    name: "Sunil Kumar Jakhar",
    role: "State President (since May 2022)",
    caste: "Hindu Brahmin",
    age: 72,
    strength: "Ex-PPCC President, mass leader appeal, deep knowledge of Punjab politics, offered to resign after 2024 LS but Modi-Shah retained him, effective anti-Mann campaigner",
    weakness: "Hindu face in Sikh-majority state, limited rural reach, age 72, Brahmin candidate for a Jat-dominated polity",
    region: "All Punjab / Malwa",
    winnability: 45,
  },
  {
    name: "Ashwani Kumar Sharma",
    role: "Working President (since July 2025)",
    caste: "Hindu",
    age: 61,
    strength: "MLA Pathankot, oversees party elections, day-to-day state operations, loyal organisational hand",
    weakness: "Limited mass appeal, reportedly unhappy over delayed elevation to state president post",
    region: "Majha / Pathankot",
    winnability: 35,
  },
  {
    name: "Ravneet Singh Bittu",
    role: "Union Minister of State (Railways, Food Processing)",
    caste: "Sikh (Jat)",
    age: 50,
    strength: "Grandson of ex-CM Beant Singh (assassinated 1995), prominent Sikh face in BJP, 3-time Congress MP who joined BJP Mar 2024, Union Minister despite losing 2024 LS, Rajya Sabha MP from Rajasthan",
    weakness: "Lost Ludhiana LS 2024 by ~21K votes, imported from Congress, not organically BJP, RS from Rajasthan (not Punjab), opposes SAD alliance",
    region: "Malwa / Ludhiana",
    winnability: 50,
  },
  {
    name: "Capt. Amarinder Singh",
    role: "Former CM (Congress → BJP)",
    caste: "Jat Sikh",
    age: 82,
    strength: "Former CM, royal Patiala lineage, military background, commands respect across communities, merged Punjab Lok Cong with BJP Sep 2022",
    weakness: "Age 82, largely inactive 2024-2025 due to health, daughter Jai Inder Kaur in BJP but his own relevance declining, advocates SAD alliance against party line",
    region: "Malwa / Patiala",
    winnability: 35,
  },
];

// Congress leaders who joined BJP
const congressDefectors = [
  { name: "Sunil Jakhar", formerRole: "PPCC President (Congress)", joinedBJP: "May 2022", currentRole: "BJP State President", impact: "Major catch — was Congress's tallest Brahmin face in Punjab" },
  { name: "Capt. Amarinder Singh", formerRole: "CM Punjab (Congress)", joinedBJP: "Sep 2022", currentRole: "BJP National Executive Member", impact: "Merged Punjab Lok Cong with BJP, brought Patiala royal connect" },
  { name: "Ravneet Singh Bittu", formerRole: "3-time MP Ludhiana (Congress)", joinedBJP: "Mar 2024", currentRole: "Union MoS Railways", impact: "Sikh face, Union Minister, Rahul Gandhi's former close aide" },
  { name: "Preneet Kaur", formerRole: "MP Patiala, Union MoS (Congress)", joinedBJP: "Mar 2024", currentRole: "BJP Member", impact: "4-time MP, Amarinder's wife, Patiala connect" },
  { name: "Ashwani Sekhri", formerRole: "MLA, Minister in Amarinder govt", joinedBJP: "2024", currentRole: "BJP Member", impact: "OBC face, Majha presence" },
  { name: "Ranjit Singh Dhillon", formerRole: "PPCC Coordinator Tarn Taran", joinedBJP: "Oct 2025", currentRole: "BJP Member", impact: "Grassroots Congress defector, Tarn Taran influence" },
  { name: "Jagmeet Dhillon", formerRole: "Congress Spokesperson Tarn Taran", joinedBJP: "Oct 2025", currentRole: "BJP Member", impact: "Brought local Congress cadre" },
];

// urban stronghold seats
const urbanStrongholds = [
  { city: "Ludhiana", seats: 9, bjpLed2024: 5, note: "BJP led in 5 of 9 segments, AAP wiped out in all 9" },
  { city: "Amritsar", seats: 7, bjpLed2024: 3, note: "Won Amritsar North & Central, lost rural Ajnala" },
  { city: "Jalandhar", seats: 5, bjpLed2024: 3, note: "Central, North, Cantonment went BJP" },
  { city: "Pathankot", seats: 3, bjpLed2024: 3, note: "Sujanpur, Pathankot, Boha all strong BJP leads" },
  { city: "Patiala", seats: 4, bjpLed2024: 2, note: "Urban Patiala segments, Dera Bassi" },
  { city: "Mohali / Kharar", seats: 3, bjpLed2024: 2, note: "Highest urban Hindu concentration" },
];

// RSS-aligned leadership
const rssLeaders = [
  { name: "Manthri Srinivas Sullu", role: "General Secretary (Organisation)", note: "RSS appointee, handles organisational machinery, cadre deployment" },
  { name: "Narinder Singh Raina", role: "National Secretary (J&K/Punjab affairs)", note: "RSS background, attends core committee, coordinates Centre-state" },
  { name: "Iqbal Singh Lalpura", role: "National Parliamentary Board Member", note: "Former Minorities Commission chairperson, Sikh face in national leadership" },
];

// 2024 LS vote share breakdown
const voteShareData = [
  { label: "2022 Assembly Vote Share", value: "6.6%", change: "Record low" },
  { label: "2024 Lok Sabha Vote Share", value: "18.56%", change: "+12pp from 2022" },
  { label: "2019 LS Vote Share", value: "9.63%", change: "Under SAD alliance" },
  { label: "Assembly Segments Led (2024)", value: "23/117", change: "Up from 2 in 2022" },
];

// CM face strategy
const cmFaceOptions = [
  { name: "National Leadership Model", strategy: "PM Modi + Amit Shah as campaign faces", strength: "Highest credibility, proven vote puller", weakness: "No local Punjabi CM face, feeds 'outsider' narrative" },
  { name: "Sunil Jakhar as CM Face", strategy: "Project Jakhar as CM candidate", strength: "Punjabi Hindu Brahmin, Congress defector appeal", weakness: "Limited Sikh vote appeal, age 72" },
  { name: "Ravneet Bittu as Future Face", strategy: "Young Sikh leader, Union Minister", strength: "Sikh face, under-50, central government backing", weakness: "Lost last election, not state-level CM ready yet" },
  { name: "No CM Face Declared", strategy: "Fight on Modi name, decide post-poll", strength: "Maximum flexibility, avoids alienating communities", weakness: "Opposition attacks: 'BJP has no Punjabi CM face'" },
];

export default function BJPLeadershipPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
              B
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              BJP Leadership
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Going solo 2027 - Sunil Jakhar as state president - Congress defector influx - Urban Hindu strategy
          </p>
        </div>
        <Badge variant="warning">2 MLAs</Badge>
      </div>

      {/* Amit Shah Solo Announcement */}
      <div className="rounded-xl border-2 border-orange-400 bg-orange-50 p-5 dark:border-orange-700 dark:bg-orange-900/20">
        <div className="flex items-start gap-4">
          <span className="text-3xl">📢</span>
          <div>
            <h3 className="text-lg font-bold text-orange-700 dark:text-orange-400">&quot;No More Chhota Bhai&quot; — Amit Shah, March 14, 2026</h3>
            <p className="text-sm text-orange-600 dark:text-orange-300 mt-1">
              At the <strong>Badlav Rally</strong> in Killi Chahlan, Moga, Amit Shah declared BJP will contest the 2027 Punjab Assembly elections <strong>independently</strong>,
              ending all speculation of a reunion with SAD. The 24-year-old alliance (1996-2020) is officially dead. Shah promised an anti-conversion law within
              1 month of forming government and a drug-free Punjab within 2 years. BJP&apos;s 2027 campaign will be centrally driven by national leadership.
            </p>
          </div>
        </div>
      </div>

      {/* Vote Share Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {voteShareData.map((m) => (
          <MetricCard
            key={m.label}
            title={m.label}
            value={m.value}
            subtitle={m.change}
            color="bg-orange-500"
          />
        ))}
      </div>

      {/* Core Leadership Matrix */}
      <div className="rounded-xl border border-orange-200 bg-white p-6 shadow-sm dark:border-orange-800 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm font-bold text-white">B</span>
          <div>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">Core Leadership Matrix</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Top 4 leaders shaping BJP Punjab strategy for 2027</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {coreLeaders.map((leader) => (
            <div key={leader.name} className="rounded-lg border border-orange-200 bg-white p-4 dark:border-orange-700 dark:bg-orange-900/10">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{leader.name}</h4>
                  <p className="text-sm text-slate-500">{leader.role} | Age {leader.age}</p>
                  <p className="text-xs text-orange-600 mt-1">{leader.caste}</p>
                </div>
                <Badge variant={leader.winnability > 45 ? "success" : "warning"}>{leader.region}</Badge>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-green-600">Strength:</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{leader.strength}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-red-600">Weakness:</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{leader.weakness}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Former Congress Leaders in BJP */}
      <div className="rounded-xl border border-orange-200 bg-white p-6 shadow-sm dark:border-orange-800 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm font-bold text-white">←</span>
          <div>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">Congress Defector Influx</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">BJP has become the default destination for former Congress heavyweights in Punjab</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full">
            <thead className="bg-orange-50 dark:bg-orange-900/20">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Former Role</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Joined BJP</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {congressDefectors.map((d) => (
                <tr key={d.name} className="hover:bg-orange-50 dark:hover:bg-orange-900/10">
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">{d.name}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">{d.formerRole}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-500">{d.joinedBJP}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{d.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
          <p className="text-sm text-orange-700 dark:text-orange-300">
            <strong>Pattern:</strong> BJP&apos;s Punjab unit is increasingly composed of former Congress leaders. Of the top 5 state-level faces,
            only Ashwani Sharma has a non-Congress origin (BJP veteran). This creates an organizational challenge — many defectors lack grassroots
            RSS cadre networks and are viewed with suspicion by the old BJP guard. The total defector count across 2024-2025 exceeds 40 distinct
            Congress leaders joining BJP in Punjab.
          </p>
        </div>
      </div>

      {/* Urban Strongholds */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Urban Strongholds & Hindu Vote Consolidation
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          For the first time, upper-caste Hindus in Punjab polarized en masse behind BJP in 2024 LS — but 0 seats won due to Sikh-rural ceiling
        </p>

        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full">
            <thead className="bg-orange-50 dark:bg-orange-900/20">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">City Cluster</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Assembly Seats</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">BJP Led (2024)</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {urbanStrongholds.map((u) => (
                <tr key={u.city} className="hover:bg-orange-50 dark:hover:bg-orange-900/10">
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">{u.city}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-500">{u.seats}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-orange-600 font-medium">{u.bjpLed2024}/{u.seats}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{u.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <h5 className="text-sm font-semibold text-orange-700 dark:text-orange-300">Hindu Polarization Ceiling</h5>
            <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
              Upper-caste Hindus voted near-unanimously for BJP for the first time in 2024. Source: analyst consensus (HT, TOI, IE).
              But this ceiling caps BJP at ~18-19% statewide vote share without Sikh, Dalit, or rural support.
            </p>
          </div>
          <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <h5 className="text-sm font-semibold text-orange-700 dark:text-orange-300">Expansion Needed</h5>
            <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
              BJP needs to win Sikh (mostly rural) and Dalit (Mazhabi Sikh, Balmiki) voters to win seats.
              RSS is deploying cadre for SC outreach. Panna Pramukh model: 1.76 lakh booth-level workers planned for 2027.
            </p>
          </div>
        </div>
      </div>

      {/* RSS-Aligned Leadership */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          RSS-Aligned Leadership & Organizational Wing
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          The organizational backbone of BJP Punjab — distinct from the political/electoral faces
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {rssLeaders.map((r) => (
            <div key={r.name} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h4 className="font-semibold text-orange-700 dark:text-orange-400">{r.name}</h4>
              <p className="text-xs text-slate-500 mt-1"><strong>Role:</strong> {r.role}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{r.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
          <p className="text-sm text-orange-700 dark:text-orange-300">
            <strong>Vacancy:</strong> The position of Punjab state affairs in-charge has been vacant since Vijay Rupani&apos;s death in a plane crash (June 2025).
            New national president Nitin Nabin (elected Jan 21, 2026) faces the challenge of filling this role. Without a full-time in-charge,
            Punjab BJP&apos;s organizational machinery lacks central coordination.
          </p>
        </div>
      </div>

      {/* CM Face Strategy */}
      <div className="rounded-xl border border-orange-200 bg-white p-6 shadow-sm dark:border-orange-800 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          CM Face Strategy
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          National vs State leadership — BJP has not declared a CM candidate for 2027
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {cmFaceOptions.map((o) => (
            <div key={o.name} className="rounded-lg border border-orange-200 p-4 dark:border-orange-700">
              <h4 className="font-semibold text-orange-700 dark:text-orange-400">{o.name}</h4>
              <p className="text-xs text-slate-500 mt-1"><strong>Strategy:</strong> {o.strategy}</p>
              <div className="mt-2 flex items-start gap-2">
                <span className="text-xs font-medium text-green-600">Strength:</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{o.strength}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs font-medium text-red-600">Weakness:</span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{o.weakness}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
          <p className="text-sm text-orange-700 dark:text-orange-300">
            <strong>Most Likely (May 2026):</strong> BJP will fight 2027 on PM Modi&apos;s face without declaring a CM candidate. Post-poll,
            the party could project a Sikh CM face (Ravneet Bittu or a new pick from assembly winners) to govern.
            This strategy worked in Haryana (Nayab Saini elevated post-poll) and Uttarakhand (Pushkar Dhami elevated mid-term).
            However, in Punjab, the absence of a local CM face is a bigger liability due to the state&apos;s strong regional identity.
          </p>
        </div>
      </div>

      {/* 2027 Outlook */}
      <div className="rounded-xl border-2 border-orange-500 bg-orange-50 p-6 dark:border-orange-700 dark:bg-orange-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">27</span>
          <div>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">2027 Punjab Election Outlook</h3>
            <p className="text-sm text-orange-600 dark:text-orange-400">BJP solo debut — Can the 18.56% vote share translate to seats?</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard title="Best Case Seats" value="25-32" subtitle="Full Hindu consolidation + some SC/Sikh seats" color="bg-green-500" />
          <MetricCard title="Base Case Seats" value="12-18" subtitle="Urban seats only, limited rural breakthrough" color="bg-orange-500" />
          <MetricCard title="Worst Case Seats" value="5-8" subtitle="Fragmented opposition helps others, not BJP" color="bg-red-500" />
        </div>

        <div className="mt-4 rounded-lg bg-white/60 p-3 dark:bg-orange-900/30">
          <p className="text-sm text-orange-700 dark:text-orange-300">
            <strong>Assessment:</strong> BJP&apos;s 2027 prospects hinge on whether 18.56% LS vote share can be converted into a winning seat distribution.
            In 2024, 0 seats from 18.56% was a distribution problem — votes concentrated in urban areas producing 2nd/3rd place finishes.
            In a 4-way assembly contest, 18.56% could yield 20-25 seats if distributed more evenly. The solo strategy is high-risk but the only option
            after the SAD alliance breakdown. The Congress defector influx gives BJP a wider candidate pool but the organizational RSS cadre
            remains thin outside urban pockets. Key to watch: candidate selection for rural and SC-reserved seats.
          </p>
        </div>
      </div>
    </div>
  );
}
