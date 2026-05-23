"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { TrendingDown, AlertTriangle, DollarSign, Users } from "lucide-react";

export default function SocioEconomicPage() {
  // Punjab vs Haryana Comparison
  const punjabVsHaryanaData = [
    { metric: "Per Capita Income", punjab: "2,30,523", haryana: "3,25,000", ratio: "1.41x" },
    { metric: "Youth Unemployment", punjab: "19.3%", haryana: "14.8%", difference: "+4.5pp" },
    { metric: "State Debt/GSDP", punjab: "44.47%", haryana: "28.3%", difference: "+16.17pp" },
    { metric: "Groundwater Extraction", punjab: "156%", haryana: "112%", difference: "+44pp" },
    { metric: "HDI Rank", punjab: "12", haryana: "9", difference: "3 ranks lower" },
  ];

  // Youth unemployment detailed data (PLFS Oct-Dec 2025) - A24
  const youthUnemploymentData = [
    { category: "Overall (15-29 years)", value: "19.3%", comparison: "vs 14.3% national avg", trend: "Up from 18.9%", severity: "HIGH" },
    { category: "Rural Combined", value: "22.5%", comparison: "Highest in north", trend: "Worsening", severity: "CRITICAL" },
    { category: "Rural Male", value: "19.9%", comparison: "vs 12.4% national", trend: "High", severity: "HIGH" },
    { category: "Rural Female", value: "30.7%", comparison: "2x national avg (12.9%)", trend: "Severe", severity: "CRITICAL" },
    { category: "Urban Combined", value: "14.8%", comparison: "vs 18.0% national", trend: "Moderate", severity: "MODERATE" },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            <TrendingDown className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Socio-Economic Sentiment Drivers
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Economic distress is the #1 driver of voter anger and anti-incumbent sentiment
            </p>
          </div>
        </div>
      </motion.div>

      {/* Critical Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6"
      >
        <MetricCard
          title="Youth Unemployment"
          value="19.3%"
          subtitle="Top anger driver"
          color="rose"
        />
        <MetricCard
          title="State Debt"
          value="4.17L Cr"
          subtitle="LAST in NITI FHI"
          color="rose"
        />
        <MetricCard
          title="Drug Users"
          value="6.6 Million"
          subtitle="18% of population"
          color="rose"
        />
        <MetricCard
          title="Farm Debt"
          value="1.04L / 3L Cr"
          subtitle="Short-term / Total agricultural debt"
          color="orange"
        />
      </motion.div>

      {/* Progress Bars */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="space-y-4 mb-6"
      >
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Youth Unemployment (15-29 yrs)</span>
            <span className="text-sm font-bold text-red-600">19.3%</span>
          </div>
          <ProgressBar label="" value={19.3} color="rose" showPercentage={false} />
          <p className="text-xs text-slate-500 mt-1">National Average: 14.3% - Punjab is 5pp higher</p>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Debt-to-GSDP Ratio</span>
            <span className="text-sm font-bold text-red-600">44.47%</span>
          </div>
          <ProgressBar label="" value={44.47} color="rose" showPercentage={false} />
          <p className="text-xs text-slate-500 mt-1">Threshold: 25% - 1.78x over fiscal limit</p>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Groundwater Extraction</span>
            <span className="text-sm font-bold text-red-600">156.36%</span>
          </div>
          <ProgressBar label="" value={100} color="rose" showPercentage={false} />
          <p className="text-xs text-slate-500 mt-1">115 of 153 blocks over-exploited</p>
        </div>
      </motion.div>

      {/* Punjab vs Haryana Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              Punjab vs Haryana Economic Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable
              headers={["Metric", "Punjab", "Haryana", "Gap"]}
              rows={punjabVsHaryanaData.map(d => [d.metric, d.punjab, d.haryana, d.ratio || d.difference || "N/A"])}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Sentiment Impact */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="grid gap-4 md:grid-cols-3"
      >
        <Card>
          <CardContent>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Per Capita Income</p>
            <p className="text-2xl font-bold text-red-600">2,30,523</p>
            <p className="text-xs text-slate-500">vs Haryana 3,25,000 (41% less)</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Gini Coefficient</p>
            <p className="text-2xl font-bold text-orange-600">0.48</p>
            <p className="text-xs text-slate-500">High income inequality</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">District Disparity</p>
            <p className="text-2xl font-bold text-orange-600">8.47:1</p>
            <p className="text-xs text-slate-500">Highest vs lowest district PCI</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/40"
      >
        <p className="text-sm text-red-700 dark:text-red-400">
          <strong>Sentiment Impact:</strong> Economic distress (19.3% youth unemployment, 4.17L Cr debt) is driving Anger + Resignation emotions. 6.6M drug users and agrarian debt create powerful anti-incumbent narrative for Congress to exploit.
        </p>
      </motion.div>

      {/* Detailed Youth Unemployment */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <span>CRITICAL: Youth Unemployment Crisis (PLFS Oct-Dec 2025)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {youthUnemploymentData.map((item, i) => (
                <div key={i} className="rounded-lg bg-white p-3 dark:bg-slate-800">
                  <p className="text-xs text-slate-500">{item.category}</p>
                  <p className="text-lg font-bold text-red-600">{item.value}</p>
                  <p className="text-xs text-slate-500">{item.comparison}</p>
                  <Badge variant={item.severity === "CRITICAL" ? "danger" : item.severity === "HIGH" ? "warning" : "info"}>{item.severity}</Badge>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded bg-white dark:bg-slate-800">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong>Labour Force Participation:</strong> 45.9% overall (male 66.3%, female only 22%). Worker Population Ratio: 37.1% (15-29 age group). Haryana improved to 12.4% - Punjab worsening vs improving.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Farmer Debt */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Card className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <span>CRITICAL: Farmer Debt - Most Potent Rural Economic Issue</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-orange-600 dark:text-orange-300">
              <strong>Punjab ranked 3rd highest in farm debt (India)</strong> - Rs 2,03,249 per agri household (NSSO/Lok Sabha Aug 2025).
              Total outstanding debt: Rs 3 lakh crore (short-term: Rs 1.04 lakh crore). <strong>89% of farm households are indebted.</strong> Institutional: 78.7% | Non-institutional: 21.3%.
              Agri growth: 1.9% p.a. (2004-05 to 2024-25) - far below Green Revolution rates.
              Cotton yield declined 18.4% (500-408 kg/ha). Rice area expanded 200,000+ hectares.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Water Crisis */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <Card className="bg-cyan-50 dark:bg-cyan-900/20 border-2 border-cyan-200 dark:border-cyan-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-cyan-500" />
              <span>CRITICAL: Water & Environmental Crisis - Top-10 Voter Issue</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-cyan-600 dark:text-cyan-300">
              <strong>115 of 153 groundwater blocks over-exploited (75%+, highest in India).</strong> Groundwater extraction at 156% of recharge rate. Water table declining 0.49 m/yr avg (46 cm/yr in Malwa). SYL Canal deadlocked since Jan 2026. 70%+ water sources contaminated. Cancer rates in Malwa: 90-110 per 100,000.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Jobs Promise */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        <Card className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <span>AAP&apos;s Broken Promise: 25 Lakh Jobs</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-orange-600 dark:text-orange-300">AAP&apos;s 2016/2017 commitment: 25 lakh jobs in 5 years. As of 2026, this promise remains unfulfilled - youth unemployment has actually increased since AAP took office. (NDTV July 2016, The Hindu March 2026)</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
