"use client";

import { MetricCard, Badge } from "@/components/ui/MetricCard";

// CM Face Candidates (A-04-01, A-04-02)
const cmFaceCandidates = [
  { name: "Charanjit Singh Channi", role: "Former CM (2021-22)", caste: "Dalit (Ramdasia)", age: 63, strength: "First Dalit CM, SC vote (~32%), won Jalandhar LS 2024 by 1.76L", weakness: "6-month tenure, limited Majha support", region: "Doaba/Malwa", winnability: 92 },
  { name: "Amarinder Singh Raja Warring", role: "PPCC President", caste: "Jat Sikh", age: 48, strength: "Won Ludhiana LS 2024, organizational control", weakness: "Rural base vs urban challenge", region: "Malwa", winnability: 88 },
  { name: "Partap Singh Bajwa", role: "CLP Leader", caste: "Jat Sikh (Rajput)", age: 69, strength: "30+ years legislative exp, Majha base", weakness: "Age factor, no Dalit face", region: "Majha/Gurdaspur", winnability: 65 },
  { name: "Sukhjinder Singh Randhawa", role: "Former Deputy CM", caste: "Jat Sikh", age: 62, strength: "Won Gurdaspur LS 2024, admin experience", weakness: "No pan-Punjab brand", region: "Majha", winnability: 72 },
  { name: "Gurdev Singh Aujla", role: "Senior Leader", caste: "Jat Sikh", age: 58, strength: "Strong Doaba base, Irrigation portfolio", weakness: "Limited Malwa presence", region: "Doaba", winnability: 58 },
  { name: "Bhagwant Singh Singla", role: "Party Leader", caste: "Jat Sikh (Bhatia)", age: 55, strength: "Business community connect, Malwa base", weakness: "No legislative experience", region: "Malwa", winnability: 52 },
];

// Congress Ministers (A-04-02)
const congressLeaders = [
  { name: "Charanjit Singh Channi", role: "Former CM", caste: "Dalit (Mazhabi Sikh)", age: 63, strength: "SC vote (~32%), first Dalit CM", weakness: "Short 6-month tenure", region: "Doaba, Malwa" },
  { name: "Raja Warring", role: "PPCC President", caste: "Jat Sikh", age: 48, strength: "Organizational control, Malwa farm union links", weakness: "Jat Sikh ceiling, Sidhu faction", region: "Malwa rural" },
  { name: "Partap Singh Bajwa", role: "CLP Leader", caste: "Jat Sikh (Rajput)", age: 69, strength: "Legislative experience, Majha base", weakness: "SC vote ceiling", region: "Majha, Gurdaspur" },
  { name: "Sukhjinder Singh Randhawa", role: "Senior Leader", caste: "Jat Sikh", age: 62, strength: "Doaba experience, former Deputy CM", weakness: "No state-wide brand", region: "Doaba" },
];

export default function CandidateLeadershipPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
              4
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Candidate Supremacy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Leadership Matrix - CM face candidates & factional dynamics
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </div>

      {/* Congress Leadership */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Congress Leadership Matrix
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Collective leadership approach - No CM face declared (May 2026)
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {congressLeaders.map((leader) => (
            <div key={leader.name} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{leader.name}</h4>
                  <p className="text-sm text-slate-500">{leader.role} | Age {leader.age}</p>
                  <p className="text-xs text-teal-600 mt-1">{leader.caste}</p>
                </div>
                <Badge variant={leader.role.includes("Former") ? "success" : "info"}>{leader.region}</Badge>
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
        <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            Channi Dalit identity most strategically valuable: Punjab SC population ~32% (highest in India), no Punjabi CM from SC community historically. CM face decision expected 60-75 days before election (Nov-Dec 2026).
          </p>
        </div>
      </div>

      {/* Factional Dynamics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Selection Method</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>- Survey-based winnability (Sunil Kanugolu)</li>
            <li>- 3 independent surveys commissioned</li>
            <li>- AICC direct control (bypasses PPCC)</li>
            <li>- No CM candidate declared yet</li>
            <li>- Bhupesh Baghel supervising (AICC)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Ticket Strategy</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>- 60-70 new faces (confirmed)</li>
            <li>- 50% tickets under-50 years</li>
            <li>- 33% women quota target</li>
            <li>- SC seats: 34 reserved, target 18-22</li>
            <li>- OBC: 20-22 candidates planned</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Internal Factions</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>- Channi camp: Dalit representation demand</li>
            <li>- Warring camp: Organizational control</li>
            <li>- Bajwa/Randhawa: Majha-Doaba balance</li>
            <li>- Sidhu void: Unresolved tension</li>
            <li>- Sunil Jakhar: Left for BJP (2022)</li>
          </ul>
        </div>
      </div>

      {/* CM Face Candidates */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          CM Face Candidates (A-04-01/02)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Congress collective leadership - no CM face declared as of May 2026
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {cmFaceCandidates.map((c) => (
            <div key={c.name} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{c.name}</h4>
                  <p className="text-sm text-slate-500">{c.role} | Age {c.age}</p>
                  <p className="text-xs text-teal-600 mt-1">{c.caste}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-teal-600">{c.winnability}%</p>
                  <p className="text-xs text-slate-500">Winnability</p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-green-600">Strength:</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{c.strength}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-red-600">Weakness:</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{c.weakness}</span>
                </div>
              </div>
              <Badge variant="info">{c.region}</Badge>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Channi Dalit Identity:</strong> Punjab SC population ~32% (highest in India), no Punjabi CM from SC community historically. CM decision expected 60-75 days before election (Nov-Dec 2026).
          </p>
        </div>
      </div>

      {/* Monte Carlo Simulation Summary */}
      <div className="rounded-xl border-2 border-purple-500 bg-purple-50 p-6 dark:border-purple-700 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">M</span>
          <div>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">Monte Carlo Seat Simulation</h3>
            <p className="text-sm text-purple-600 dark:text-purple-400">1,000 simulation runs | Congress 50-58 seats base case</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard title="Base Case (50%)" value="50-58" subtitle="Congress seats" color="bg-purple-500" />
          <MetricCard title="Best Case (25%)" value="65-75" subtitle="Congress seats" color="bg-green-500" />
          <MetricCard title="Worst Case (25%)" value="18-30" subtitle="Congress seats" color="bg-red-500" />
          <MetricCard title="Hung Assembly" value="65%" subtitle="Probability" color="bg-blue-500" />
        </div>

        <div className="mt-4 rounded-lg bg-purple-100 p-3 dark:bg-purple-900/40">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>Key Insight:</strong> Three-way split favors neither major party. Congress needs CM face announcement by Oct 2026 to capitalize on LS 2024 momentum. Anti-incumbency alone insufficient without positive narrative.
          </p>
        </div>
      </div>
    </div>
  );
}
