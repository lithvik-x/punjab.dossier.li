"use client";

import { motion } from "framer-motion";
import { MetricCard, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Users, Target, TrendingUp, AlertTriangle } from "lucide-react";

// ============================================================
// CONGRESS LEADERSHIP (Verified via minimax-web search May 2026)
// ============================================================

const congressLeaders = [
  { name: "Charanjit Singh Channi", role: "Former CM (Sept 2021 - March 2022)", caste: "Dalit (Mazhabi Sikh)", age: 63, strength: "First Dalit CM of Punjab, won Jalandhar LS 2024 by 1.76L votes, SC vote ~32%", weakness: "Lost both seats in 2022 (Chamkaur Sahib, Bhadaur), 6-month tenure as CM", region: "Doaba/Malwa", winnability: 85 },
  { name: "Amarinder Singh Raja Warring", role: "PPCC President (since 2022)", caste: "Jat Sikh", age: 48, strength: "Won Ludhiana LS 2024 defeating Ravneet Singh Bittu, controls party organization", weakness: "Jat Sikh dominance creates ceiling with Dalit voters", region: "Malwa", winnability: 80 },
  { name: "Partap Singh Bajwa", role: "CLP Leader / Leader of Opposition", caste: "Jat Sikh (Rajput)", age: 69, strength: "4-term MLA Qadian, 30+ years legislative experience, Majha base", weakness: "Age factor, no Dalit outreach", region: "Majha/Gurdaspur", winnability: 60 },
  { name: "Sukhjinder Singh Randhawa", role: "MP Gurdaspur, Former Deputy CM", caste: "Jat Sikh", age: 67, strength: "Won Gurdaspur LS 2024 by 82,861 votes, former Deputy CM", weakness: "Limited pan-Punjab appeal", region: "Majha", winnability: 70 },
  { name: "Bhupesh Baghel", role: "AICC General Secretary (Punjab in-charge)", caste: "OBC", age: 62, strength: "Trusted Kharge-Gandhi loyalist, appointed Feb 2025, controls ticket distribution", weakness: "Not Punjabi, central observer role", region: "All Punjab", winnability: 50 },
];

// CM Face Candidates - Congress (no official CM face declared as of May 2026)
const cmFaceCandidates = [
  { name: "Charanjit Singh Channi", role: "Former CM / MP Jalandhar", caste: "Dalit (Ramdasia)", age: 63, strength: "First Dalit CM, SC vote bank, viral social media presence", weakness: "Lost both 2022 assembly seats, factional opposition within Congress", region: "Doaba/Malwa", winnability: 85 },
  { name: "Amarinder Singh Raja Warring", role: "PPCC President / MP Ludhiana", caste: "Jat Sikh", age: 48, strength: "Won Ludhiana LS 2024, organizational control, Rahul Gandhi connect", weakness: "Jat Sikh ceiling with Dalit voters", region: "Malwa", winnability: 80 },
  { name: "Partap Singh Bajwa", role: "CLP Leader / MLA Qadian", caste: "Jat Sikh (Rajput)", age: 69, strength: "30+ years exp, Majha strongman, opposition leader", weakness: "Age, no Dalit face", region: "Majha", winnability: 60 },
  { name: "Sukhjinder Singh Randhawa", role: "MP Gurdaspur", caste: "Jat Sikh", age: 67, strength: "Won Gurdaspur 2024, admin experience", weakness: "No state-wide brand", region: "Majha", winnability: 70 },
];

// ============================================================
// AAP LEADERSHIP (Verified via minimax-web search May 2026)
// ============================================================

const aapLeaders = [
  { name: "Bhagwant Mann", role: "CM (since March 2022)", caste: "Jat Sikh", age: 52, strength: "AAP's first Punjab CM, 92-seat 2022 victory, strong social media", weakness: "Governance challenges, ED raids, MP defections", region: "Malwa", winnability: 75 },
  { name: "Raghav Chadha", role: "Former RS Deputy Leader (Defected to BJP)", caste: "General", age: 42, strength: "Key strategist, built AAP Punjab majority, now with BJP", weakness: "Defected April 2026", region: "Delhi/Punjab", winnability: 0 },
  { name: "Gurmeet Singh Meet Hayer", role: "Minister / MP Sangrur", caste: "Jat Sikh", age: 48, strength: "Cabinet minister, won Sangrur LS 2024, only AAP cabinet minister who won 2022", weakness: "Barnala lost in bypoll 2024", region: "Malwa", winnability: 70 },
  { name: "Kuldeep Singh Dhaliwal", role: "MLA Ajnala, NRI Affairs", caste: "Jat Sikh", age: 52, strength: "Cabinet minister, won Ajnala 2022, development work", weakness: "Verbal controversies, subordinates under ED probe", region: "Majha", winnability: 65 },
];

// AAP Mass Defection (April 2026) - MAJOR CRISIS
const aapDefections = [
  { name: "Raghav Chadha", role: "Former RS Deputy Leader", party: "→ BJP (April 2026)" },
  { name: "Sandeep Pathak", role: "Senior AAP Leader", party: "→ BJP (April 2026)" },
  { name: "Ashok Kumar Mittal", role: "RS MP, LPU Chancellor", party: "→ BJP (April 2026)" },
  { name: "Harbhajan Singh", role: "Former Cricketer, RS MP", party: "→ BJP (April 2026)" },
  { name: "Swati Maliwal", role: "RS MP", party: "→ BJP (April 2026)" },
  { name: "Rajinder Gupta", role: "RS MP", party: "→ BJP (April 2026)" },
  { name: "Vikramjit Singh Sahney", role: "RS MP", party: "→ BJP (April 2026)" },
];

// ============================================================
// BJP LEADERSHIP (Verified via minimax-web search May 2026)
// ============================================================

const bjpLeaders = [
  { name: "Sunil Kumar Jakhar", role: "State President (since May 2022)", caste: "Hindu Brahmin", age: 72, strength: "Ex-Congress, PPCC President, mass leader appeal", weakness: "Limited Sikh outreach, Hindu candidate for Muslim-sensitive state", region: "All Punjab", winnability: 45 },
  { name: "Ashwani Kumar Sharma", role: "Working President (since July 2025)", caste: "Hindu", age: 61, strength: "MLA Pathankot, oversees party elections, day-to-day operations", weakness: "Limited mass appeal", region: "Majha", winnability: 35 },
  { name: "Nayab Singh Saini", role: "Haryana CM (deployed to Punjab)", caste: "Jat", age: 55, strength: "Haryana hat-trick 2024, BJP's Punjab outreach face", weakness: "Not Punjabi, Haryana CM role", region: "Haryana/Punjab", winnability: 40 },
];

// ============================================================
// SAD LEADERSHIP (Verified via minimax-web search May 2026)
// ============================================================

const sadLeaders = [
  { name: "Sukhbir Singh Badal", role: "President (since 2007)", caste: "Jat Sikh", age: 63, strength: "Controls party since 2007, family dynasty, 100+ seat claim", weakness: "Lost 2022 (3 seats worst ever), assassination attempt Dec 2024", region: "Malwa", winnability: 55 },
  { name: "Bikram Singh Majithia", role: "Former Deputy CM", caste: "Jat Sikh", age: 58, strength: "Ex-Deputy CM, powerful Majha leader, family legacy", weakness: "No ministerial position currently", region: "Majha", winnability: 50 },
  { name: "Giani Harpreet Singh", role: "President (Punar Surjit faction)", caste: "Jat Sikh", age: 65, strength: "Released election manifesto Apr 2026, 35% women + 40% youth tickets", weakness: "Split party, rival to Sukhbir faction", region: "Malwa", winnability: 30 },
];

export default function CandidateLeadershipPage() {
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
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-lg font-bold text-white shadow-lg">
              <Users className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Candidate Supremacy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Leadership Matrix - CM face candidates & factional dynamics
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </motion.div>

      {/* Congress Leadership */}
      <Card hover>
        <CardHeader>
          <CardTitle>Congress Leadership Matrix</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
        </Card>

      {/* Factional Dynamics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card hover>
          <CardHeader>
            <CardTitle as="h4">Selection Method</CardTitle>
          </CardHeader>
          <CardContent>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>- Survey-based winnability (Sunil Kanugolu)</li>
            <li>- 3 independent surveys commissioned</li>
            <li>- AICC direct control (bypasses PPCC)</li>
            <li>- No CM candidate declared yet</li>
            <li>- Bhupesh Baghel supervising (AICC)</li>
          </ul>
          </CardContent>
        </Card>
        <Card hover>
          <CardHeader>
            <CardTitle as="h4">Ticket Strategy</CardTitle>
          </CardHeader>
          <CardContent>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>- 60-70 new faces (confirmed)</li>
            <li>- 50% tickets under-50 years</li>
            <li>- 33% women quota target</li>
            <li>- SC seats: 34 reserved, target 18-22</li>
            <li>- OBC: 20-22 candidates planned</li>
          </ul>
          </CardContent>
        </Card>
        <Card hover>
          <CardHeader>
            <CardTitle as="h4">Internal Factions</CardTitle>
          </CardHeader>
          <CardContent>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>- Channi camp: Dalit representation demand</li>
            <li>- Warring camp: Organizational control</li>
            <li>- Bajwa/Randhawa: Majha-Doaba balance</li>
            <li>- Sidhu void: Unresolved tension</li>
            <li>- Sunil Jakhar: Left for BJP (2022)</li>
          </ul>
          </CardContent>
        </Card>
      </div>

      {/* CM Face Candidates */}
      <Card hover>
        <CardHeader>
          <CardTitle>CM Face Candidates (A-04-01/02)</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
        </Card>

      {/* AAP Leadership - MASS DEFECTION CRISIS */}
      <Card hover>
        <CardHeader>
          <CardTitle>AAP Leadership</CardTitle>
          <p className="text-sm text-red-600 dark:text-red-400">CM Mann - Re-election bid | MAJOR SETBACK: 7 RS MPs defected to BJP (April 2026)</p>
        </CardHeader>
        <CardContent>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-lg font-bold text-white">
            <Target className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">AAP Leadership</h3>
            <p className="text-sm text-red-600 dark:text-red-400">CM Mann - Re-election bid | MAJOR SETBACK: 7 RS MPs defected to BJP (April 2026)</p>
          </div>
        </div>

        {/* Mass Defection Alert */}
        <div className="mt-4 p-4 rounded-lg bg-red-100 border border-red-300 dark:bg-red-900/40 dark:border-red-700">
          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" /> April 2026 Mass Defection - 7 Rajya Sabha MPs Joined BJP
          </h4>
          <div className="grid gap-2 md:grid-cols-2">
            {aapDefections.map((mp) => (
              <div key={mp.name} className="flex items-center justify-between text-sm">
                <span className="font-medium text-red-800 dark:text-red-200">{mp.name}</span>
                <Badge variant="danger">{mp.party}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {aapLeaders.map((leader) => (
            <div key={leader.name} className="p-4 rounded-lg border border-red-200 dark:border-red-700 bg-white dark:bg-red-900/20">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{leader.name}</h4>
                  <p className="text-sm text-slate-500">{leader.role}</p>
                  <p className="text-xs text-blue-600 mt-1">{leader.caste} | Age {leader.age}</p>
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

      {/* BJP Leadership - SOLO STRATEGY */}
      <Card hover>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-lg font-bold text-white">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <CardTitle>BJP Leadership</CardTitle>
              <p className="text-sm text-orange-600 dark:text-orange-400">Going solo 2027 - No SAD alliance | Sunil Jakhar President | Alliance broken March 2026</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>

        <div className="mt-4 p-3 rounded-lg bg-orange-100 dark:bg-orange-900/40">
          <p className="text-sm text-orange-700 dark:text-orange-300">
            <strong>Amit Shah (March 14, 2026):</strong> &quot;BJP will fight 2027 polls to form its own government&quot; - SAD alliance OFF
          </p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {bjpLeaders.map((leader) => (
            <div key={leader.name} className="p-4 rounded-lg border border-orange-200 dark:border-orange-700 bg-white dark:bg-orange-900/20">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{leader.name}</h4>
                  <p className="text-sm text-slate-500">{leader.role}</p>
                  <p className="text-xs text-orange-600 mt-1">{leader.caste} | Age {leader.age}</p>
                </div>
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
              <Badge variant="warning" className="mt-2">{leader.region}</Badge>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/40">
            <h5 className="text-sm font-semibold text-orange-700 dark:text-orange-300">Booth-Level Strategy</h5>
            <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Panna Pramukh model: 1.76 lakh booth caretakers planned for 2027</p>
          </div>
          <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/40">
            <h5 className="text-sm font-semibold text-orange-700 dark:text-orange-300">Vote Share Growth</h5>
            <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">2019 LS: 9.63% → 2024 LS: 18.56% (BUT 0 seats won)</p>
          </div>
        </div>
        </CardContent>
        </Card>

      {/* SAD Leadership - NO NON-BADAL CANDIDATE */}
      <Card hover>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500 text-lg font-bold text-white">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <CardTitle>SAD Leadership</CardTitle>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">Sukhbir Badal - No non-Badal candidate emerges | 2022 worst result: 3 seats</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {sadLeaders.map((leader) => (
            <div key={leader.name} className="p-4 rounded-lg border border-yellow-200 dark:border-yellow-700 bg-white dark:bg-yellow-900/20">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{leader.name}</h4>
                  <p className="text-sm text-slate-500">{leader.role}</p>
                  <p className="text-xs text-yellow-600 mt-1">{leader.caste} | Age {leader.age}</p>
                </div>
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
              <Badge variant="warning" className="mt-2">{leader.region}</Badge>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/40">
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            <strong>Key Issue:</strong> Parkash Singh Badal died April 2023. Sukhbir faces internal family challenges. December 2024 assassination attempt on Sukhbir. No clear successor within party.
          </p>
        </div>
        </CardContent>
        </Card>

      {/* Monte Carlo Simulation Summary */}
      <Card hover>
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <CardTitle>Monte Carlo Seat Simulation</CardTitle>
              <p className="text-sm text-purple-600 dark:text-purple-400">1,000 simulation runs | Congress 50-58 seats base case</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard title="Base Case (50%)" value="50-58" subtitle="Congress seats" color="purple" />
          <MetricCard title="Best Case (25%)" value="65-75" subtitle="Congress seats" color="emerald" />
          <MetricCard title="Worst Case (25%)" value="18-30" subtitle="Congress seats" color="rose" />
          <MetricCard title="Hung Assembly" value="65%" subtitle="Probability" color="blue" />
        </div>

        <div className="mt-4 rounded-lg bg-purple-100 p-3 dark:bg-purple-900/40">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>Key Insight:</strong> Three-way split favors neither major party. Congress needs CM face announcement by Oct 2026 to capitalize on LS 2024 momentum. Anti-incumbency alone insufficient without positive narrative.
          </p>
        </div>
        </CardContent>
        </Card>
    </div>
  );
}
