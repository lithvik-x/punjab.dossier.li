"use client";

import { Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import type {
  CongressMention,
} from "@/types/media-narrative";

export default function MediaPartySentimentPage() {
  const congressMentions: Record<string, CongressMention> = {
    narrative1: { label: "Congress is finished in Punjab", source: "BJP leaders (Himanta Sarma, Feb 2026)", sentiment: -0.85, reach: "National" },
    narrative2: { label: "No CM face / collective leadership", source: "Congress itself (Baghel, Jan 2026)", sentiment: -0.65, reach: "State-wide" },
    narrative3: { label: "Internal fights public", source: "Resignations, Jan 2026 warning", sentiment: -0.75, reach: "High" },
    narrative4: { label: "Tarn Taran by-election loss", source: "November 2025", sentiment: -0.70, reach: "State-wide" },
    narrative5: { label: "Jalandhar LS win (Channi)", source: "2024 Lok Sabha", sentiment: 0.60, reach: "Limited" },
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
              <BarChart3 className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Party Media Sentiment
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Congress, AAP, BJP sentiment analysis • Narrative tracking
          </p>
        </div>
        <Badge variant="success">+0.48 Media Sentiment</Badge>
      </motion.div>

      {/* Key Negative Narratives About Congress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Key Narratives About Congress (A37 Research)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Negative narratives dominating coverage — requires proactive counter-strategy</p>
            <div className="mt-6 space-y-4">
              {Object.values(congressMentions).map((narrative, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-start gap-4 rounded-lg border border-slate-100 p-4 dark:border-slate-700"
                >
                  <div className="flex-1">
                    <p className="font-medium text-slate-700 dark:text-slate-300">&quot;{narrative.label}&quot;</p>
                    <p className="mt-1 text-xs text-slate-500">Source: {narrative.source} | Reach: {narrative.reach}</p>
                  </div>
                  <Badge variant={narrative.sentiment > 0 ? "success" : "danger"}>
                    {narrative.sentiment > 0 ? "+" : ""}{narrative.sentiment}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Congress Coverage Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
          <CardHeader>
            <CardTitle className="text-orange-700 dark:text-orange-300">Congress Media Coverage Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Coverage Volume</h4>
                <p className="text-sm text-slate-600 mt-1">LOW-MODERATE — largely reactive, event-driven, not proactive</p>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Sentiment Breakdown</h4>
                <ul className="mt-2 text-sm text-slate-600 space-y-1">
                  <li>Negative: 52% — Internal fights, &quot;finished&quot; narrative, no CM face</li>
                  <li>Neutral: 32% — Event-driven, reactive coverage</li>
                  <li>Positive: 16% — Limited to Jalandhar LS win,局部 positive coverage</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Key Threat</h4>
                <p className="text-sm text-slate-600 mt-1">BJP narrative &quot;Congress is finished in Punjab&quot; has national reach and is being amplified by BJP leaders</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AAP Coverage Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
          <CardHeader>
            <CardTitle className="text-red-700 dark:text-red-300">AAP Media Coverage Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Coverage Volume</h4>
                <p className="text-sm text-slate-600 mt-1">HIGHEST — dominant media presence, proactive coverage</p>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Sentiment Breakdown</h4>
                <ul className="mt-2 text-sm text-slate-600 space-y-1">
                  <li>Negative: 38% — Governance failures, Rajya Sabha crisis, defections</li>
                  <li>Neutral: 32% — Mixed coverage, some positive governance stories</li>
                  <li>Positive: 30% — Welfare schemes, some infrastructure</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Trend</h4>
                <p className="text-sm text-slate-600 mt-1">DECLINING — governance failures, drug crisis, AAP government raids on media</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* BJP Coverage Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-300">BJP Media Coverage Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Coverage Volume</h4>
                <p className="text-sm text-slate-600 mt-1">HIGH — proactive narrative building, Sunil Jakhar leadership</p>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Sentiment Breakdown</h4>
                <ul className="mt-2 text-sm text-slate-600 space-y-1">
                  <li>Negative: 18% — Limited negative coverage</li>
                  <li>Neutral: 37% — Factual reporting</li>
                  <li>Positive: 45% — Growth narrative, vote share 9.6% to 18.5%</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Trend</h4>
                <p className="text-sm text-slate-600 mt-1">RISING — significant vote share growth, Dalit-dera strategy, pro-active media outreach</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Coverage Volume Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Party Coverage Volume Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex items-center gap-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20"
              >
                <div className="h-4 w-4 rounded-full bg-red-500" />
                <span className="font-medium text-red-700">AAP</span>
                <Badge variant="danger">HIGHEST</Badge>
                <span className="text-sm text-slate-600">Proactive, government-backed coverage</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.55 }}
                className="flex items-center gap-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20"
              >
                <div className="h-4 w-4 rounded-full bg-orange-500" />
                <span className="font-medium text-orange-700">BJP</span>
                <Badge variant="warning">HIGH</Badge>
                <span className="text-sm text-slate-600">Proactive narrative, IT cell amplification</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="flex items-center gap-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20"
              >
                <div className="h-4 w-4 rounded-full bg-yellow-500" />
                <span className="font-medium text-yellow-700">SAD</span>
                <Badge variant="default">MODERATE</Badge>
                <span className="text-sm text-slate-600">Traditional media ties, PTC network</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.65 }}
                className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800"
              >
                <div className="h-4 w-4 rounded-full bg-slate-400" />
                <span className="font-medium text-slate-700">Congress</span>
                <Badge variant="warning">LOW-MODERATE</Badge>
                <span className="text-sm text-slate-600">Reactive, event-driven coverage</span>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
