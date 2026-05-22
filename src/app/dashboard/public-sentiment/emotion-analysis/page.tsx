"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { DataTable, Badge } from "@/components/ui/MetricCard";
import { Heart, AlertTriangle, Activity, Users, AlertCircle } from "lucide-react";

export default function EmotionAnalysisPage() {
  const mp7BuzzTracking = {
    keywordTaxonomy: {
      total: "3,450+ keywords",
      categories: ["Policy (840)", "Leadership (620)", "Issue-based (1,100)", "Anti-corruption (450)", "Regional (440)"],
      languages: ["Punjabi", "Hindi", "English", "Dialectal variations"]
    },
    topKeywords: [
      { rank: 1, keyword: "Drugs/Nasha", priority: "CRITICAL", weight: 3.0, multiplier: "3.0x volume", reason: "Defining rural Malwa issue, 6.6M users" },
      { rank: 2, keyword: "Unemployment/Berozgar", priority: "CRITICAL", weight: 2.5, multiplier: "2.5x volume", reason: "Youth desperation, 19.3% youth unemployment" },
      { rank: 3, keyword: "MSP/Farm Crisis", priority: "HIGH", weight: 2.0, multiplier: "2.0x volume", reason: "Farmer suicide data, agrarian debt" },
      { rank: 4, keyword: "Corruption/Bhrashtachar", priority: "HIGH", weight: 1.8, multiplier: "1.8x volume", reason: "AAP governance failures, broken promises" },
      { rank: 5, keyword: "Law & Order/Security", priority: "MEDIUM", weight: 1.5, multiplier: "1.5x volume", reason: "Gangland killings, drug-related violence" },
    ],
    velocityMetrics: [
      { level: "Level 1 (Baseline)", mentions: "<100/hour", color: "emerald", action: "Routine monitoring" },
      { level: "Level 2 (Elevated)", mentions: "100-500/hour", color: "amber", action: "Enhanced tracking" },
      { level: "Level 3 (High)", mentions: "500-2,000/hour", color: "orange", action: "Active response team" },
      { level: "Level 4 (Critical)", mentions: ">2,000/hour", color: "rose", action: "War room escalation" },
      { level: "Crisis (Black Swan)", mentions: "Viral velocity", color: "purple", action: "Leadership briefing" }
    ],
  };

  const mp7EmotionAnalysis = {
    primaryEmotions: [
      { emotion: "Anger", intensity: "Very High (85%)", triggers: ["Broken promises", "Drug crisis", "Unemployment", "SYL canal"], actionable: "Yes - channel into policy critique" },
      { emotion: "Fear", intensity: "High (72%)", triggers: ["Security", "Religious harmony", "Economic stability", "Job loss"], actionable: "Yes - security narrative" },
      { emotion: "Betrayal", intensity: "Very High (81%)", triggers: ["Candidate defection", "Broken commitments", "Leadership vacuum"], actionable: "Yes - trust rebuilding" },
      { emotion: "Resignation", intensity: "Moderate (58%)", triggers: ["Youth emigration", "Political disillusionment", "Cynicism"], actionable: "Difficult - hope messaging required" },
      { emotion: "Hope", intensity: "Moderate (52%)", triggers: ["New leadership", "Policy promises", "Change narrative"], actionable: "Yes - amplify aspirational" },
      { emotion: "Pride", intensity: "High (76%)", triggers: ["Sikh pride", "Punjabi language", "Agricultural heritage", "Cultural identity"], actionable: "Yes - heritage celebration" }
    ],
    segmentWiseEmotions: [
      { segment: "Urban Youth (18-25)", primary: "Anger + Resignation", intensity: "Very High", shift: "AAP-Congress or NOTA" },
      { segment: "Rural Youth (18-35)", primary: "Anger + Betrayal", intensity: "High", shift: "AAP-Congress (drug crisis)" },
      { segment: "Women (All)", primary: "Frustration + Hope", intensity: "High", shift: "AAP loyal but disappointed" },
      { segment: "SC Voters", primary: "Betrayal + Anger", intensity: "Very High", shift: "AAP-Congress (Mazhabi)" },
      { segment: "Jat Farmers", primary: "Anger + Resignation", intensity: "High", shift: "SAD/BJP or Congress" },
      { segment: "Urban Middle Class", primary: "Cynicism + Betrayal", intensity: "High", shift: "AAP-BJP or Congress" },
      { segment: "NRI Community", primary: "Anger + Pride", intensity: "Very High", shift: "Pro-Congress (historical)" }
    ],
  };

  const mp7RumorManagement = {
    detectionToAlert: { target: "<45 min", critical: "<90 min" },
    alertToVerification: { target: "<2 hrs", critical: "<4 hrs" },
    verificationToResponse: { target: "<4 hrs", critical: "<8 hrs" },
    containmentTarget: { tier2: ">85%", critical: ">70%" },
    knownRumorScenarios: [
      { rumor: "Congress is Anti-Sikh", risk: "CRITICAL", probability: "85%", impact: "Severe", mitigation: "Historical record, 1984 context, comparative", timeline: "Preempt before narrative gains traction" },
      { rumor: "Congress Sold Out Farmers", risk: "HIGH", probability: "70%", impact: "Significant", mitigation: "MSP in writing, farm laws opposition record", timeline: "Preempt" },
      { rumor: "All Parties Same / Nothing Changes", risk: "HIGH", probability: "75%", impact: "Moderate", mitigation: "Concrete deliverables, specific commitments", timeline: "Ongoing" },
      { rumor: "Congress Can't Win / Strategic Voting", risk: "HIGH", probability: "80%", impact: "High", mitigation: "Internal polling data, voter contact evidence", timeline: "Preempt" },
      { rumor: "Congress Leaders Are Corrupt", risk: "MODERATE", probability: "60%", impact: "Moderate", mitigation: "Reform documentation, accountability frameworks", timeline: "Reactive" }
    ],
    responsePlaybook: [
      { step: "Detect", tool: "Social listening + keyword alerts", sla: "<15 min" },
      { step: "Verify", tool: "Fact-check team + ground truth", sla: "<2 hrs" },
      { step: "Amplify", tool: "Pre-bunking content + influencer network", sla: "<4 hrs" },
      { step: "Contain", tool: "Counter-narrative + official response", sla: "<8 hrs" },
      { step: "Learn", tool: "Post-incident analysis + update playbook", sla: "24 hrs" }
    ]
  };

  const velocityThresholds = [
    { level: "Low", threshold: "<10 mentions/hour", status: "Normal monitoring" },
    { level: "Rising", threshold: "10-50 mentions/hour", status: "Watch" },
    { level: "High", threshold: "50-200 mentions/hour", status: "Active tracking" },
    { level: "Viral", threshold: ">200 mentions/hour", status: "Crisis protocol" },
  ];

  const preBunkCategories = [
    { category: "Historical Record", examples: "Green Revolution, 1984, minority empowerment" },
    { category: "Policy Position", examples: "SYL canal, MSP guarantee, drug plan" },
    { category: "Comparative", examples: "AAP delivery vs Congress, SAD betrayal" },
    { category: "Vulnerability", examples: "Why Congress lost 2022, leadership renewal" },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-lg font-bold text-white">
            <Heart className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Emotion & Rumor Analysis
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              MP7-003 Buzz Tracking, MP7-004 Emotion Analysis & Rumor Management
            </p>
          </div>
        </div>
      </motion.div>

      {/* MP7-003: Buzz Tracking & Velocity Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card accentColor="cyan" className="bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-cyan-500" />
              <span>MP7-003: Buzz Tracking & Velocity Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-cyan-600 dark:text-cyan-300 mb-4">Real-time monitoring with 3,450+ keyword taxonomy</p>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Keyword Taxonomy */}
              <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50">
                <h4 className="font-semibold text-cyan-800 dark:text-cyan-100">Keyword Taxonomy</h4>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Total Keywords:</span>
                    <span className="font-bold text-cyan-600">{mp7BuzzTracking.keywordTaxonomy.total}</span>
                  </div>
                  <div className="mt-3 space-y-1">
                    {mp7BuzzTracking.keywordTaxonomy.categories.map((cat, i) => (
                      <p key={i} className="text-xs text-slate-500">- {cat}</p>
                    ))}
                  </div>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {mp7BuzzTracking.keywordTaxonomy.languages.map((lang, i) => (
                      <Badge key={i} variant="info">{lang}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Keywords */}
              <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50">
                <h4 className="font-semibold text-cyan-800 dark:text-cyan-100">Top 5 Monitoring Keywords</h4>
                <div className="mt-3 space-y-2">
                  {mp7BuzzTracking.topKeywords.map((kw) => (
                    <div key={kw.rank} className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white">{kw.rank}</span>
                      <span className="flex-1 text-sm text-slate-600 dark:text-slate-400">{kw.keyword}</span>
                      <Badge variant={kw.priority === "CRITICAL" ? "danger" : kw.priority === "HIGH" ? "warning" : "info"}>{kw.priority}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Velocity Levels */}
            <h4 className="mt-6 font-semibold text-cyan-800 dark:text-cyan-100">Velocity Alert Levels</h4>
            <div className="mt-3 space-y-2">
              {mp7BuzzTracking.velocityMetrics.map((level, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-${level.color}-500`}></div>
                  <span className="flex-1 text-sm text-slate-600 dark:text-slate-400">{level.level}</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{level.mentions}</span>
                  <span className="text-xs text-slate-500">{level.action}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* MP7-004: Emotion Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card accentColor="rose" className="bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-rose-500" />
              <span>MP7-004: Emotion Analysis & Segment-Wise Tracking</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-rose-600 dark:text-rose-300 mb-4">Affective dimension analysis - emotions driving voter behavior</p>

            {/* Primary Emotions */}
            <h4 className="font-semibold text-rose-800 dark:text-rose-100">Primary Emotion Drivers</h4>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {mp7EmotionAnalysis.primaryEmotions.map((emo, i) => (
                <div key={i} className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50">
                  <div className="flex justify-between items-start">
                    <p className="font-semibold text-rose-700 dark:text-rose-200">{emo.emotion}</p>
                    <Badge variant={emo.intensity.includes("Very") ? "danger" : emo.intensity.includes("High") ? "warning" : "info"}>
                      {emo.intensity}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Triggers: {emo.triggers.join(", ")}</p>
                  <p className="text-xs text-teal-600 mt-1">Actionable: {emo.actionable}</p>
                </div>
              ))}
            </div>

            {/* Segment-Wise Emotions */}
            <h4 className="mt-6 font-semibold text-rose-800 dark:text-rose-100">Segment-Wise Emotion Analysis</h4>
            <div className="mt-3">
              <DataTable
                headers={["Voter Segment", "Primary Emotion", "Intensity", "Shift Direction"]}
                rows={mp7EmotionAnalysis.segmentWiseEmotions.map(seg => [
                  seg.segment,
                  seg.primary,
                  seg.intensity,
                  seg.shift
                ])}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* MP7-004: Rumor Management Framework */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card accentColor="amber" className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              <span>MP7-004: Rumor Management Framework</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-600 dark:text-amber-300 mb-4">Detection - Verification - Response - Containment</p>

            {/* Response Time Metrics */}
            <h4 className="font-semibold text-amber-800 dark:text-amber-100">Response Time Targets</h4>
            <div className="mt-3 grid gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50 text-center">
                <p className="text-2xl font-bold text-amber-600">{"<45 min"}</p>
                <p className="text-xs text-slate-500">Detection - Alert</p>
              </div>
              <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50 text-center">
                <p className="text-2xl font-bold text-amber-600">{"<2 hrs"}</p>
                <p className="text-xs text-slate-500">Alert - Verification</p>
              </div>
              <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50 text-center">
                <p className="text-2xl font-bold text-amber-600">{"<4 hrs"}</p>
                <p className="text-xs text-slate-500">Verification - Response</p>
              </div>
              <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50 text-center">
                <p className="text-2xl font-bold text-teal-600">{">85%"}</p>
                <p className="text-xs text-slate-500">Containment Target (Tier 2)</p>
              </div>
            </div>

            {/* Response Playbook */}
            <h4 className="mt-6 font-semibold text-amber-800 dark:text-amber-100">Response Playbook</h4>
            <div className="mt-3 grid gap-3 md:grid-cols-5">
              {mp7RumorManagement.responsePlaybook.map((step, i) => (
                <div key={i} className="rounded-lg bg-white/50 p-3 dark:bg-slate-800/50">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">{i + 1}</span>
                    <p className="font-medium text-amber-700 dark:text-amber-200">{step.step}</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">{step.tool}</p>
                  <p className="text-xs text-teal-600 mt-1">SLA: {step.sla}</p>
                </div>
              ))}
            </div>

            {/* Known Rumor Scenarios */}
            <h4 className="mt-6 font-semibold text-amber-800 dark:text-amber-100">Known Rumor Scenarios (Priority Pre-Bunk)</h4>
            <div className="mt-3">
              <DataTable
                headers={["Rumor", "Risk", "Probability", "Mitigation"]}
                rows={mp7RumorManagement.knownRumorScenarios.map(r => [
                  r.rumor,
                  r.risk,
                  r.probability,
                  r.mitigation
                ])}
              />
            </div>

            <div className="mt-4 p-3 rounded-lg bg-red-100 dark:bg-red-900/40 border border-red-300">
              <p className="text-sm text-red-700 dark:text-red-300">
                <strong>CRITICAL:</strong> &quot;Congress is Anti-Sikh&quot; narrative requires immediate pre-bunking. Probability 85%, Impact Severe. Historical record + 1984 context + comparative framing required before narrative gains traction.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sentiment Velocity Thresholds */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Velocity Thresholds (B18 Methodology)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Monitoring benchmarks for social media virality</p>
            <div className="mt-4">
              <DataTable
                headers={["Velocity Level", "Threshold", "Alert Status"]}
                rows={velocityThresholds.map(item => [item.level, item.threshold, item.status])}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Pre-Bunking Categories */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Pre-Bunking Categories (G32 Framework)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Pre-bunking is cheaper than reactive response - build resistance before rumor circulates</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {preBunkCategories.map((item, i) => (
                <div key={i} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
                  <p className="font-semibold text-slate-700 dark:text-slate-200">{item.category}</p>
                  <p className="text-sm text-slate-500 mt-1">{item.examples}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
