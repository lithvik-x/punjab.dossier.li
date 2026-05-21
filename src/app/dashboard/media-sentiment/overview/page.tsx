"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import type {
  CongressSentiment,
  AAPSentiment,
  BJPSentiment,
  CoverageVolume,
} from "@/types/media-narrative";

export default function MediaSentimentOverviewPage() {
  const congressSentiment: CongressSentiment = {
    negative: 52,
    neutral: 32,
    positive: 16,
    trend: "stable",
  };

  const aapSentiment: AAPSentiment = {
    negative: 38,
    neutral: 32,
    positive: 30,
    trend: "declining",
  };

  const bjpSentiment: BJPSentiment = {
    negative: 18,
    neutral: 37,
    positive: 45,
    trend: "rising",
  };

  const coverageVolume: CoverageVolume[] = [
    { party: "AAP", level: "HIGHEST", color: "bg-red-500" },
    { party: "BJP", level: "HIGH", color: "bg-orange-500" },
    { party: "SAD", level: "MODERATE", color: "bg-yellow-500" },
    { party: "Congress", level: "LOW-MODERATE", color: "bg-slate-400" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
              8
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Media Sentiment
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            News analysis • Social media monitoring • Narrative tracking • TV/Radio landscape
          </p>
        </div>
        <Badge variant="success">+0.48 Media Sentiment</Badge>
      </div>

      {/* Top Metric Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Media Mentions"
          value="12.4L"
          subtitle="This month"
          change={18}
          trend="up"
          color="bg-indigo-500"
        />
        <MetricCard
          title="Social Reach"
          value="72.5L"
          subtitle="Total impressions"
          change={34}
          trend="up"
          color="bg-blue-500"
        />
        <MetricCard
          title="TV Penetration"
          value="77.5%"
          subtitle="~46.5L households"
          change={0}
          trend="up"
          color="bg-purple-500"
        />
        <MetricCard
          title="Congress Coverage"
          value="16%"
          subtitle="Positive sentiment"
          change={-4}
          trend="down"
          color="bg-orange-500"
        />
      </div>

      {/* Coverage Volume Ranking */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Coverage Volume Ranking by Party (A37 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Congress coverage is LOW-MODERATE — largely reactive, event-driven, not proactive</p>
        <div className="mt-4 flex items-center gap-4">
          {coverageVolume.map((item) => (
            <div key={item.party} className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${item.color}`} />
              <span className="text-sm font-medium text-slate-700">{item.party}</span>
              <Badge variant={item.party === "Congress" ? "warning" : item.party === "AAP" ? "danger" : "default"}>
                {item.level}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Three-Column: Congress Sentiment | AAP Sentiment | BJP Sentiment */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 shadow-sm dark:border-orange-800 dark:bg-orange-900/20">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">Congress Coverage</h3>
            <Badge variant="warning">Stable</Badge>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Negative</span>
              <span className="text-sm font-bold text-red-600">{congressSentiment.negative}%</span>
            </div>
            <ProgressBar label="" value={congressSentiment.negative} color="bg-red-500" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Neutral</span>
              <span className="text-sm font-bold text-slate-600">{congressSentiment.neutral}%</span>
            </div>
            <ProgressBar label="" value={congressSentiment.neutral} color="bg-slate-400" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Positive</span>
              <span className="text-sm font-bold text-green-600">{congressSentiment.positive}%</span>
            </div>
            <ProgressBar label="" value={congressSentiment.positive} color="bg-green-500" />
          </div>
          <p className="mt-3 text-xs text-orange-600">Sources: Internal fights, &quot;finished&quot; narrative, no CM face</p>
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-800 dark:bg-red-900/20">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">AAP Coverage</h3>
            <Badge variant="danger">Declining</Badge>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Negative</span>
              <span className="text-sm font-bold text-red-600">{aapSentiment.negative}%</span>
            </div>
            <ProgressBar label="" value={aapSentiment.negative} color="bg-red-500" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Neutral</span>
              <span className="text-sm font-bold text-slate-600">{aapSentiment.neutral}%</span>
            </div>
            <ProgressBar label="" value={aapSentiment.neutral} color="bg-slate-400" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Positive</span>
              <span className="text-sm font-bold text-green-600">{aapSentiment.positive}%</span>
            </div>
            <ProgressBar label="" value={aapSentiment.positive} color="bg-green-500" />
          </div>
          <p className="mt-3 text-xs text-red-600">Sources: Governance failures, Rajya Sabha crisis, defections</p>
        </div>

        <div className="rounded-xl border border-green-200 bg-green-50 p-6 shadow-sm dark:border-green-800 dark:bg-green-900/20">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">BJP Coverage</h3>
            <Badge variant="success">Rising</Badge>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Negative</span>
              <span className="text-sm font-bold text-red-600">{bjpSentiment.negative}%</span>
            </div>
            <ProgressBar label="" value={bjpSentiment.negative} color="bg-red-500" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Neutral</span>
              <span className="text-sm font-bold text-slate-600">{bjpSentiment.neutral}%</span>
            </div>
            <ProgressBar label="" value={bjpSentiment.neutral} color="bg-slate-400" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Positive</span>
              <span className="text-sm font-bold text-green-600">{bjpSentiment.positive}%</span>
            </div>
            <ProgressBar label="" value={bjpSentiment.positive} color="bg-green-500" />
          </div>
          <p className="mt-3 text-xs text-green-600">Sources: 9.6% to 18.5% vote share rise, Sunil Jakhar leadership</p>
        </div>
      </div>

      {/* Narrative Tracking */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Narrative Tracking
        </h3>
        <DataTable
          headers={["Narrative", "Source", "Reach", "Sentiment", "Congress Framing"]}
          rows={[
            ["Drugs Crisis", "Punjab Tribune", "12.5L", "Negative", "CM's mission" ],
            ["Farmers Welfare", "Times of India", "8.2L", "Positive", "Congress guarantee"],
            ["Jobs Generation", "The Hindu", "5.4L", "Mixed", "Action plan" ],
            ["Healthcare", "Indian Express", "4.8L", "Positive", "Infrastructure" ],
            ["Power Free", "TV Punjab", "18.2L", "Negative", "Debt burden" ],
            ["Education Reform", "Dainik Bhaskar", "6.1L", "Neutral", "Under review" ],
          ]}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Congress Narrative Share
          </h3>
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Drugs Mission</span>
                <span className="text-sm font-medium">68%</span>
              </div>
              <ProgressBar label="" value={68} color="bg-blue-500" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Farmer Welfare</span>
                <span className="text-sm font-medium">54%</span>
              </div>
              <ProgressBar label="" value={54} color="bg-green-500" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Youth Jobs</span>
                <span className="text-sm font-medium">42%</span>
              </div>
              <ProgressBar label="" value={42} color="bg-purple-500" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Healthcare</span>
                <span className="text-sm font-medium">48%</span>
              </div>
              <ProgressBar label="" value={48} color="bg-teal-500" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Competitor Media Share
          </h3>
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-orange-600">AAP</span>
                <span className="text-sm font-medium">38%</span>
              </div>
              <ProgressBar label="" value={38} color="bg-orange-500" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-green-600">SAD</span>
                <span className="text-sm font-medium">15%</span>
              </div>
              <ProgressBar label="" value={15} color="bg-green-500" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-orange-400">BJP</span>
                <span className="text-sm font-medium">8%</span>
              </div>
              <ProgressBar label="" value={8} color="bg-orange-400" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-500">Others</span>
                <span className="text-sm font-medium">6%</span>
              </div>
              <ProgressBar label="" value={6} color="bg-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
