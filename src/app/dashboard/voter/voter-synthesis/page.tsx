"use client";

import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Users, AlertTriangle, TrendingUp, Target, Vote, Lightbulb, Globe, Brain } from "lucide-react";

const keyStrategicFindings = [
  { finding: "Anti-AAP Sentiment", classRating: "CLASS A", note: "Drug crisis is #1 voter anger trigger" },
  { finding: "AAP→Congress Swing", magnitude: "12-15%", note: "~10-12 lakh voters in motion" },
  { finding: "Dera Networks", seats: "40-50", note: "Assembly seats influenced" },
];

const regionalDistribution = [
  { region: "MALWA", seats: "69 seats (59%)", voters: "~1.35 crore voters, Jat Sikh dominant" },
  { region: "MAJHA", seats: "25 seats (21%)", voters: "~50 lakh voters, Border region" },
  { region: "DOABA", seats: "23 seats (20%)", voters: "~35 lakh voters, Highest Dalit concentration" },
];

const casteComposition = [
  { caste: "SC (Total)", population: "32%", voters: "~66-70 lakh", seats: "34 seats", trajectory: "Fluid" },
  { caste: "Jat Sikh", population: "21%", voters: "~43-47 lakh", seats: "Open", trajectory: "Malwa dominant" },
  { caste: "OBC", population: "17%", voters: "~32-38 lakh", seats: "Open", trajectory: "Fluid" },
  { caste: "Upper Caste Hindu", population: "16%", voters: "~32-36 lakh", seats: "Open", trajectory: "BJP urban" },
];

const valueClusters = [
  { percentage: "35%", type: "Traditionalist", description: "Religion, panthic identity" },
  { percentage: "25%", type: "Modernist", description: "Jobs, economy, anti-corruption" },
  { percentage: "20%", type: "Survivalist", description: "Drug crisis, law & order" },
  { percentage: "12%", type: "Cynic", description: "Anti-establishment, NOTA" },
  { percentage: "5%", type: "Activist", description: "Farmer unions, social movements" },
  { percentage: "3%", type: "Identity Warrior", description: "Dalit empowerment" },
];

const issueSalience = [
  { rank: 1, issue: "DRUG ERADICATION", critical: "~85%", color: "bg-red-500" },
  { rank: 2, issue: "EMPLOYMENT/YOUTH JOBS", critical: "~80%", color: "bg-orange-500" },
  { rank: 3, issue: "MSP/FARMER WELFARE", critical: "~75%", color: "bg-yellow-500" },
  { rank: 4, issue: "GOVERNANCE/CORRUPTION", critical: "~70%", color: "bg-purple-500" },
];

const voterPersonas = [
  { persona: "A", title: "Disappointed AAP Voter", size: "~12-15 lakh", age: "30-50 yrs", demographics: "Jat Sikh, Mazhabi, OBC", trigger: "Drug crisis persistence, broken MSP promise", message: "AAP promised. AAP failed. Congress delivers." },
  { persona: "B", title: "Jat Sikh Farmer (Malwa)", size: "~28-32 lakh", age: "35-70 yrs", demographics: "Marginal to large farmers", trigger: "MSP guarantee, debt relief, drug menace", message: "MSP guarantee in writing. Your land, your dignity." },
  { persona: "C", title: "Dalit Youth (Doaba)", size: "~14 lakh", age: "18-30 yrs", demographics: "Ravidasia/Ramdasia Sikh", trigger: "Jobs (primary), drug addiction, caste discrimination", message: "Jobs for SC youth — not just promises." },
  { persona: "D", title: "Rural Sikh Woman", size: "~25-30 lakh", age: "30-55 yrs", demographics: "All 117 seats", trigger: "Children's future, drug crisis (lost sons/brothers)", message: "Your children's future, your family's safety." },
];

const swingSegments = [
  { segment: "AAP→Congress", magnitude: "12-15%", voters: "~10-12 lakh" },
  { segment: "Congress→AAP", magnitude: "5-7%", voters: "~3-5 lakh" },
  { segment: "SAD→AAP→Congress", magnitude: "3-5%", voters: "~2-3 lakh" },
  { segment: "First-Time Undecided", magnitude: "3-4%", voters: "~5-7 lakh" },
];

const deraNetworks = [
  { name: "Radha Soami Beas", followers: "2-3 million", seats: "40-50", alignment: "BJP/SAD walk (Feb 2026)" },
  { name: "Dera Sacha Sauda", followers: "1-2 million", seats: "20-30", alignment: "Fragmented post-conviction" },
  { name: "Dera Ballan", followers: "500,000+", seats: "8-12", alignment: "Ravidasia Sikh, AAP-leaning" },
];

const counterNarratives = [
  { promise: "Drug-free Punjab in 1 month", reality: "232,000+ opioid dependent (AIIMS 2025)" },
  { promise: "10 lakh jobs", reality: "Youth unemployment rose to 22.5%" },
  { promise: "MSP guarantee", reality: "Not legislated in 2 years" },
];

const swingVoterTiming = {
  earlyDeciders: { percentage: "8-12%", timing: "T-6 months to T-2 months", profile: "Party loyalists, issue-based voters, elderly" },
  campaignPeriod: { percentage: "25-35%", timing: "T-2 months to T-2 weeks", profile: "Persuadable independents, swing voters, single-issue" },
  lateDeciders: { percentage: "40-50%", timing: "T-2 weeks to E-Day", profile: "Floating voters, convenience-based, young first-timers" },
};

const aapToCongressSwing = {
  magnitude: "12-15%",
  voters: "~10-12 lakh",
  conversionRate: "22-28% of AAP 2022 voters now considering Congress",
  reasons: [
    "Governance failure perception (drugs, jobs, economy)",
    "Anti-incumbency against AAP MLAs",
    "Warring organizational revival",
    "AICC High Command authority signaling stability",
  ],
  regionalConcentration: "Highest in Malwa rural seats where AAP won by 15-20% margins",
  risk: "Swing may reverse if Congress ticket distribution alienates key vote banks",
  opportunity: "Congress needs to capitalize before AAP recovers from governance slump",
};

export default function VoterSynthesisPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
              M1
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Voter Ecosystem Synthesis
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Mega-Pillar 2 intelligence summary and strategic findings
          </p>
        </div>
        <Badge variant="success">CLASS A Intelligence</Badge>
      </div>

      {/* Key Strategic Findings */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-2 border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">
              Key Strategic Findings (CLASS A)
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {keyStrategicFindings.map((finding) => (
                <div key={finding.finding} className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                  <p className="text-xs text-indigo-600 dark:text-indigo-300">{finding.finding}</p>
                  <p className="text-lg font-bold text-indigo-700">
                    {finding.classRating || finding.magnitude || finding.seats}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{finding.note}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Regional Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Regional Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {regionalDistribution.map((r) => (
                <div key={r.region} className="rounded-lg border border-slate-100 p-4 text-center dark:border-slate-700">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{r.region}</p>
                  <p className="text-lg font-bold text-slate-600 dark:text-slate-400">{r.seats}</p>
                  <p className="mt-1 text-xs text-slate-500">{r.voters}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Caste Composition */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Caste Composition and Political Weight (CLASS A-B)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <DataTable
                headers={["Caste/Community", "Population %", "Estimated Voters", "Reserved Seats", "2027 Trajectory"]}
                rows={casteComposition.map((c) => [c.caste, c.population, c.voters, c.seats, c.trajectory])}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Value Clusters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Voter Value Clusters (CLASS B)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {valueClusters.map((vc) => (
                <div key={vc.type} className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
                  <span className="text-lg font-bold text-slate-700 dark:text-slate-300">{vc.percentage}</span>
                  <span className="text-xs">{vc.type} ({vc.description})</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Issue Salience */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Issue Salience Hierarchy 2027 (CLASS A-B)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {issueSalience.map((issue) => (
                <div key={issue.rank} className="flex items-center gap-3">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${issue.color}`}>
                    {issue.rank}
                  </span>
                  <span className="flex-1 text-sm font-medium">{issue.issue}</span>
                  <span className="text-xs font-semibold text-red-600">{issue.critical}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* High Priority Voter Personas */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>High-Priority Voter Personas for Congress 2027</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {voterPersonas.map((persona) => (
                <div key={persona.persona} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
                      {persona.persona}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{persona.title}</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <div>Size: <strong>{persona.size}</strong></div>
                    <div>Age: <strong>{persona.age}</strong></div>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">Demographics: {persona.demographics}</p>
                  <p className="mt-1 text-xs text-slate-600">Trigger: {persona.trigger}</p>
                  <p className="mt-2 text-xs font-medium text-indigo-600">Engagement: &quot;{persona.message}&quot;</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Critical Swing Segments */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Critical Swing Segments for 2027 (CLASS B)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {swingSegments.map((seg) => (
                <div key={seg.segment} className="rounded-lg bg-teal-50 p-3 text-center dark:bg-teal-900/30">
                  <p className="text-xs text-slate-500">{seg.segment}</p>
                  <p className="text-xl font-bold text-teal-600">{seg.magnitude}</p>
                  <p className="text-xs text-slate-400">{seg.voters}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              <strong>Total Swing Vote:</strong> ~24-34 lakh voters (20-25% of electorate)
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Dera Networks */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Dera Networks: Hidden Electoral Architecture (CLASS B)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <DataTable
                headers={["Dera", "Followers", "Seats Influenced", "Political Alignment"]}
                rows={deraNetworks.map((d) => [d.name, d.followers, d.seats, d.alignment])}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Counter-Narrative Framework */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Counter-Narrative Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {counterNarratives.map((cn) => (
                <div key={cn.promise} className="flex items-start gap-2 rounded border border-slate-100 p-3 dark:border-slate-700">
                  <span className="text-xs font-bold text-red-600">AAP Promise:</span>
                  <span className="text-xs text-slate-600">&quot;{cn.promise}&quot;</span>
                  <span className="text-slate-400">→</span>
                  <span className="text-xs font-bold text-indigo-600">Reality:</span>
                  <span className="text-xs text-slate-600">{cn.reality}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Swing Voter Timing */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Swing Voter Decision Timing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(swingVoterTiming).map(([key, timing]) => (
                  <div key={key} className="rounded-lg border border-slate-100 p-3 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 dark:bg-teal-900/50 dark:text-teal-400">
                        {timing.percentage}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="text-xs text-slate-500">{timing.timing}</p>
                        <p className="text-xs text-slate-400">{timing.profile}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded bg-teal-50 p-3 dark:bg-teal-900/20">
                <p className="text-xs text-teal-700 dark:text-teal-300">
                  <strong>Late deciders are MOST susceptible</strong> to final campaign push and GOTV operations.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>AAP to Congress Swing Reversal (2027)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
                  <p className="text-xs text-slate-500">Magnitude</p>
                  <p className="text-2xl font-bold text-teal-600">{aapToCongressSwing.magnitude}</p>
                  <p className="text-xs text-slate-400">{aapToCongressSwing.voters}</p>
                </div>
                <div className="rounded-lg border border-slate-100 p-3 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-600">Conversion Rate:</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{aapToCongressSwing.conversionRate}</p>
                </div>
                <div className="rounded-lg border border-slate-100 p-3 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-600">Regional Concentration:</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{aapToCongressSwing.regionalConcentration}</p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <p className="text-xs font-bold text-slate-600">Reasons for Swing:</p>
                {aapToCongressSwing.reasons.map((reason, i) => (
                  <p key={i} className="text-xs text-slate-600 dark:text-slate-400">- {reason}</p>
                ))}
              </div>
              <div className="mt-3 rounded bg-orange-50 p-3 dark:bg-orange-900/20">
                <p className="text-xs text-orange-700 dark:text-orange-400">
                  <strong>Opportunity:</strong> {aapToCongressSwing.opportunity}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
