"use client";

import { motion } from "framer-motion";
import { MetricCard, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { AlertTriangle, Target, Users, ArrowRightLeft, TrendingDown } from "lucide-react";

// ============================================================
// AAP LEADERSHIP (Verified via minimax-web search May 2026)
// ============================================================

const coreLeaders = [
  {
    name: "Bhagwant Mann",
    role: "Chief Minister (since March 2022)",
    caste: "Jat Sikh",
    age: 52,
    strength: "AAP's first Punjab CM, 92-seat mandate in 2022, strong orator, social media connect with youth, completed 4 years March 2026 with confidence motion passed May 1",
    weakness: "Governance perception weak, 2024 LS collapse to 3/13, 'Aam Aadmi to Khaas' criticism, depends on Kejriwal for strategic direction, ED probes on ministers",
    region: "Malwa",
    winnability: 70,
  },
  {
    name: "Aman Arora",
    role: "State President (AAP Punjab) & Cabinet Minister",
    caste: "Jat Sikh",
    age: 45,
    strength: "Key organisational strategist, holds Industries & Commerce + Investment Promotion + New & Renewable Energy, loyal Mann confidant",
    weakness: "Limited independent mass appeal, elevated during crisis to shore up party discipline",
    region: "Doaba",
    winnability: 65,
  },
  {
    name: "Harpal Singh Cheema",
    role: "Finance Minister",
    caste: "Jat Sikh",
    age: 50,
    strength: "Presented 4 budgets, managed state finances, key Mann cabinet pillar",
    weakness: "Revenue deficit persistent, GST shortfall, limited mass outreach beyond budget presentations",
    region: "Malwa",
    winnability: 60,
  },
  {
    name: "Kultar Singh Sandhwan",
    role: "Speaker, Punjab Assembly",
    caste: "Jat Sikh",
    age: 52,
    strength: "Managed House effectively amid defections crisis, contains opposition",
    weakness: "Speaker role limits political campaigning, speaker controversies",
    region: "Malwa",
    winnability: 55,
  },
];

const cabinetMinisters = [
  { name: "Harjot Singh Bains", portfolio: "Local Government, Legal & Legislative Affairs, Mines & Geology, Tourism, Jails", since: "2022" },
  { name: "Dr. Baljit Kaur", portfolio: "Social Justice, Empowerment & Minorities, Social Security, Women & Child Development", since: "2022" },
  { name: "Harbhajan Singh ETO", portfolio: "Public Works (B&R)", since: "2022" },
  { name: "Tarunpreet Singh Sond", portfolio: "Power, Rural Development & Panchayats, Labour", since: "2024" },
  { name: "Dr. Ravjot", portfolio: "NRI Affairs, Parliamentary Affairs", since: "2024" },
  { name: "Lal Chand Kataruchak", portfolio: "Food & Civil Supplies, Consumer Affairs, Forests & Wildlife", since: "2022" },
  { name: "Dr. Vijay Singla", portfolio: "Health & Family Welfare, Medical Education & Research", since: "2022" },
  { name: "Laljit Singh Bhullar", portfolio: "Transport, Hospitality", since: "2022" },
  { name: "Bram Shanker Jimpa", portfolio: "Revenue, Water Supply & Sanitation, Disaster Management", since: "2022" },
];

const keyMLAs = [
  { name: "Naresh Kataria", constituency: "Dasuya", region: "Doaba", note: "First-time MLA, Dooba presence" },
  { name: "Ishank Chabbewal", constituency: "Chabbewal (SC)", region: "Doaba", note: "Son of MP Raj Kumar Chabbewal, young face" },
  { name: "Jeevan Jyot Kaur", constituency: "Amritsar East", region: "Majha", note: "Key woman face in urban Amritsar" },
  { name: "Inderbir Nijjar", constituency: "Amritsar South", region: "Majha", note: "Former minister dropped in reshuffle" },
  { name: "Balkar Sidhu", constituency: "Maur", region: "Malwa", note: "Faction leader, Bathinda influence" },
];

const electionMetrics = [
  { label: "2022 Assembly Seats", value: "92/117", change: "Landslide victory" },
  { label: "2022 Vote Share", value: "42.01%", change: "Wave mandate" },
  { label: "2024 LS Seats", value: "3/13", change: "-89 seats segment leads" },
  { label: "2024 Vote Share", value: "26.02%", change: "-16pp decline" },
];

const regionBreakdown = [
  { region: "Malwa (69 seats)", seats2022: 66, seats2024: 24, change: -42 },
  { region: "Majha (25 seats)", seats2022: 16, seats2024: 2, change: -14 },
  { region: "Doaba (23 seats)", seats2022: 10, seats2024: 7, change: -3 },
];

const rsDefectors = [
  { name: "Raghav Chadha", previousRole: "RS Deputy Leader", date: "April 24, 2026", destination: "BJP" },
  { name: "Sandeep Pathak", previousRole: "Senior Strategist, RS MP", date: "April 24, 2026", destination: "BJP" },
  { name: "Ashok Kumar Mittal", previousRole: "RS MP, LPU Chancellor", date: "April 24, 2026", destination: "BJP" },
  { name: "Harbhajan Singh", previousRole: "RS MP (Cricketer)", date: "April 24, 2026", destination: "BJP" },
  { name: "Swati Maliwal", previousRole: "RS MP", date: "April 24, 2026", destination: "BJP" },
  { name: "Rajinder Gupta", previousRole: "RS MP", date: "April 24, 2026", destination: "BJP" },
  { name: "Vikramjit Singh Sahney", previousRole: "RS MP", date: "April 24, 2026", destination: "BJP" },
];

const aapTurncoats = [
  { name: "Sheetal Angural", from: "AAP MLA Jalandhar West", to: "BJP (March 2024)", note: "Later sought to withdraw resignation" },
  { name: "Sushil Kumar Rinku", from: "AAP MP Jalandhar", to: "BJP (March 2024)", note: "Originally Congress, switched AAP Apr 2023, then BJP Mar 2024" },
  { name: "Fatehjung Singh Bajwa", from: "AAP", to: "Congress", note: "Left during 2024 LS campaign" },
];

const vulnerableMinisters = [
  { name: "Kuldeep Singh Dhaliwal", portfolio: "Former NRI Affairs Minister (dropped Jul 2025)", segment: "Ajnala", status: "Lost Amritsar LS by 40K+ votes" },
  { name: "Gurmeet Singh Khuddian", portfolio: "Agriculture Minister", segment: "Lambi", status: "Trailed in own segment, lost Bathinda LS" },
  { name: "Balbir Singh", portfolio: "Health Minister", segment: "Patiala Rural", status: "Led in segment but lost Patiala LS" },
  { name: "Laljit Singh Bhullar", portfolio: "Transport Minister", segment: "Patti", status: "Trailed in Patti, finished 3rd in Khadoor Sahib LS" },
  { name: "Dr. Baljit Kaur", portfolio: "Social Justice Minister", segment: "Malout", status: "Could not ensure lead in own segment" },
  { name: "Harbhajan Singh ETO", portfolio: "PWD Minister", segment: "Jandiala", status: "Could not ensure lead in own segment" },
  { name: "Lal Chand Kataruchak", portfolio: "Food & Supplies Minister", segment: "Bhoa", status: "Segment went to BJP" },
];

const factions = [
  { name: "Mann Loyalists", leaders: "Aman Arora, Kultar Sandhwan, Harjot Bains", strength: "CM's inner circle, control party machinery" },
  { name: "Kejriwal Camp", leaders: "Manish Sisodia (Punjab in-charge), Satyendar Jain", strength: "Delhi HQ control, strategic direction, national leadership connect" },
  { name: "Former Insiders (Defected)", leaders: "Raghav Chadha, Sandeep Pathak", strength: "Left for BJP Apr 2026, took 7 RS MPs" },
  { name: "Disgruntled Old Guard", leaders: "Mulgees, Some sitting MLAs", strength: "Upset over Morgan-style politics, ticket denial fears" },
];

export default function AAPLeadershipPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white shadow-lg">
              <Target className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              AAP Leadership
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            CM Bhagwant Mann - Governance record - Mass defection crisis - 2027 re-election bid
          </p>
        </div>
        <Badge variant="info">94 MLAs</Badge>
      </motion.div>

      {/* Alert Banner - Mass Defection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border-2 border-red-400 bg-red-50 dark:border-red-700 dark:bg-red-900/20">
          <CardHeader>
            <CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Crisis: 7 Rajya Sabha MPs Defected to BJP (April 24, 2026)
            </CardTitle>
            <p className="text-sm text-red-600 dark:text-red-300 mt-1">
              AAP lost 7 of its 10 RS MPs in a single day, including deputy leader Raghav Chadha and senior strategist Sandeep Pathak.
              CM Mann met President Murmu on May 5 seeking recall of defectors. Confidence motion passed May 1 with all 94 MLAs backing.
              This is the worst defection crisis in AAP&apos;s history.
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {rsDefectors.map((mp) => (
                <div key={mp.name} className="flex items-center justify-between rounded-lg bg-white/80 p-2 px-3 dark:bg-red-900/30">
                  <div>
                    <span className="text-sm font-medium text-red-800 dark:text-red-200">{mp.name}</span>
                    <p className="text-xs text-red-500">{mp.previousRole}</p>
                  </div>
                  <Badge variant="danger">{mp.destination}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Metric Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {electionMetrics.map((m, index) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
          >
            <MetricCard
              title={m.label}
              value={m.value}
              subtitle={m.change}
              color="cyan"
            />
          </motion.div>
        ))}
      </div>

      {/* Assembly Segment Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">
              Assembly Segment Lead Erosion: 2022 vs 2024
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              AAP led in only 32-33 of 117 assembly segments in 2024 LS, down from 92 in 2022. In 60 segments, AAP candidates finished behind rivals.
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-4">
              {regionBreakdown.map((r) => (
                <div key={r.region}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{r.region}</span>
                    <span className="text-slate-500">{r.seats2022} (2022) → {r.seats2024} (2024)</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="h-full rounded-full bg-cyan-500 transition-all"
                      style={{ width: `${(r.seats2022 / 69) * 100}%` }}
                    />
                  </div>
                  <div className="mt-1 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="h-full rounded-full bg-red-500 transition-all"
                      style={{ width: `${(r.seats2024 / 69) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Core Leadership */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="border-cyan-200 dark:border-cyan-800">
          <CardHeader>
            <CardTitle className="text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Core Leadership Matrix
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">Top 4 AAP leaders shaping party strategy and governance</p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {coreLeaders.map((leader) => (
                <div key={leader.name} className="rounded-lg border border-cyan-200 bg-white p-4 dark:border-cyan-700 dark:bg-cyan-900/10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300">{leader.name}</h4>
                      <p className="text-sm text-slate-500">{leader.role} | Age {leader.age}</p>
                      <p className="text-xs text-cyan-600 mt-1">{leader.caste}</p>
                    </div>
                    <Badge variant={leader.winnability > 65 ? "success" : "warning"}>{leader.region}</Badge>
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
          </CardContent>
        </Card>
      </motion.div>

      {/* Cabinet Ministers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">
              Bhagwant Mann Cabinet (May 2026)
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              9 cabinet reshuffles in 4 years. Sanjeev Arora arrested by ED May 2026, portfolios redistributed to Aman Arora, Tarunpreet Sond, and Harjot Bains.
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full">
                <thead className="bg-cyan-50 dark:bg-cyan-900/20">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Minister</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Portfolio</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Since</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {cabinetMinisters.map((m) => (
                    <tr key={m.name} className="hover:bg-slate-50 dark:hover:bg-slate-700/30">
                      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">{m.name}</td>
                      <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">{m.portfolio}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-500">{m.since}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Vulnerable Ministers & Anti-Incumbency */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Vulnerable Ministers & Anti-Incumbency Risk
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">7 of 15 cabinet ministers lost or failed to secure leads in their own assembly segments in 2024 LS</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full">
                <thead className="bg-red-50 dark:bg-red-900/20">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Minister</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Segment</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {vulnerableMinisters.map((m) => (
                    <tr key={m.name} className="hover:bg-red-50 dark:hover:bg-red-900/10">
                      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">{m.name}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-500">{m.portfolio}</td>
                      <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">{m.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm text-red-700 dark:text-red-300">
                <strong>Key Insight:</strong> AAP led in just 32-33 of 117 assembly segments in 2024 LS — down from 92 in 2022. In Ludhiana, AAP lost all 9 segments despite holding 8 in 2022.
                This segment-level collapse signals deep anti-incumbency. AAP would lose an estimated 55-65 seats if 2024 LS trends repeat in 2027 assembly polls.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Turncoats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="text-amber-700 dark:text-amber-400 flex items-center gap-2">
              <ArrowRightLeft className="h-5 w-5" />
              AAP Turncoats & Defectors
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">MLAs and MPs who left AAP since 2024</p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-3">
              {aapTurncoats.map((t) => (
                <div key={t.name} className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-700 dark:bg-amber-900/10">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.from}</p>
                  <Badge variant="danger" className="mt-1">{t.to}</Badge>
                  <p className="text-xs text-slate-400 mt-2">{t.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Note:</strong> Of 14 defectors across parties in Punjab 2022-2024 who were given tickets, only 2 won (Dr. Raj Kumar AAP, Dr. Dharamvira Gandhi Congress).
                Voters have consistently rejected turncoats in Punjab. The RS defection of 7 AAP MPs to BJP is unprecedented in scale but happened at the RS level,
                not affecting Assembly arithmetic directly — though it severely damages AAP&apos;s brand and organizational capacity.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Factional Dynamics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">
              Internal Factions: Mann vs Kejriwal Loyalists
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              AAP Punjab has at least four identifiable factions after the RS defection crisis
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {factions.map((f) => (
                <div key={f.name} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                  <h4 className="font-semibold text-cyan-700 dark:text-cyan-400">{f.name}</h4>
                  <p className="text-xs text-slate-500 mt-1"><strong>Leaders:</strong> {f.leaders}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{f.strength}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-cyan-50 p-3 dark:bg-cyan-900/20">
              <p className="text-sm text-cyan-700 dark:text-cyan-300">
                <strong>Mann-Kejriwal Tension:</strong> Reports suggest Kejriwal was &quot;very angry&quot; with Mann after the 2024 LS collapse over poor governance and unkept promises.
                The confidence motion passed on May 1, 2026 was as much a message to Delhi HQ as to the opposition — that Mann controls the 94 MLAs.
                However, with the Delhi Assembly defeat (Feb 2025) and the RS exodus (Apr 2026), Kejriwal&apos;s political capital to dictate Punjab strategy has diminished.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Key MLAs by Region */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">
              Key MLAs & Regional Presence
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Notable AAP MLAs beyond the cabinet
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full">
                <thead className="bg-cyan-50 dark:bg-cyan-900/20">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Constituency</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Region</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {keyMLAs.map((m) => (
                    <tr key={m.name} className="hover:bg-slate-50 dark:hover:bg-slate-700/30">
                      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">{m.name}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600 dark:text-slate-400">{m.constituency}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm"><Badge variant="info">{m.region}</Badge></td>
                      <td className="px-4 py-3 text-sm text-slate-500">{m.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* 2027 Outlook */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Card className="border-2 border-cyan-500 bg-cyan-50 dark:border-cyan-700 dark:bg-cyan-900/20">
          <CardHeader>
            <CardTitle className="text-cyan-700 dark:text-cyan-400">
              2027 Punjab Election Outlook
            </CardTitle>
            <p className="text-sm text-cyan-600 dark:text-cyan-400">AAP re-election prospects — Without Kejriwal tailwinds</p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <MetricCard title="Seats at Risk (Base)" value="55-65" subtitle="If 2024 LS trends repeat" color="rose" />
              <MetricCard title="Safe Seats" value="25-30" subtitle="Mann popularity, incumbency apparatus" color="cyan" />
              <MetricCard title="Hung Assembly Odds" value="70%" subtitle="4-way split: AAP-Cong-BJP-SAD" color="purple" />
            </div>
            <div className="mt-4 rounded-lg bg-white/60 p-3 dark:bg-cyan-900/30">
              <p className="text-sm text-cyan-700 dark:text-cyan-300">
                <strong>Assessment:</strong> AAP enters 2027 with the weakest position among the four major parties. The 2022 wave has fully dissipated.
                The 2024 LS collapse (92 segment leads to 33), the Delhi defeat (Feb 2025), the RS mass defection (Apr 2026), and ED arrests of key ministers
                have collectively destroyed the &quot;clean politics&quot; brand. Mann&apos;s personal popularity remains AAP&apos;s single strongest asset, but incumbency
                fatigue plus a fragmented opposition makes a repeat performance extremely unlikely. AAP&apos;s path to victory requires a unified anti-BJP
                vote that no longer exists after the RS defections alienated Congress. Most likely outcome: AAP loses majority, fights to stay in triple digits.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
