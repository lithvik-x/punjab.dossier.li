"use client";

import { motion } from "framer-motion";
import { MetricCard, ProgressBar, DataTable, Badge, MiniChart } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { REGIONS } from "@/lib/constants";
import { TrendingUp, TrendingDown, AlertTriangle, Info, Users, Map, Vote, Activity, BarChart3, AlertCircle, CheckCircle, UsersRound, Globe } from "lucide-react";
import {
  synthesisDemographicData,
  KEY_SYNTHESIS_METRICS,
  crossReferenceValidation,
  qualityValidation,
  gapAnalysis,
} from "@/lib/synthesis-data";

// Import Election Intelligence components
import ElectionIntelligenceSection from "@/components/dashboard/ElectionIntelligenceSection";

// ==========================================
// CYCLE 2: ELECTORAL DATA (from research-P3/electoral-data)
// ==========================================

// ==========================================
// CYCLE 2: SOCIO-ECONOMIC DATA (from research-P2/10_socio_economic)
// ==========================================

interface PunjabSocioEconomic {
  perCapitaIncome: string;
  youthUnemployment: string;
  stateDebt: string;
  debtToGSDP: string;
  groundwaterExtraction: string;
  drugUsers: string;
  farmDebt: string;
  hdi: string;
  mpiPoverty: string;
  districtPCIDisparity: string;
  giniCoefficient: string;
}

const socioEconomicData: PunjabSocioEconomic = {
  perCapitaIncome: "₹2,30,523",
  youthUnemployment: "19.3%",
  stateDebt: "₹4.17 Lakh Crore",
  debtToGSDP: "44.47%",
  groundwaterExtraction: "156.36%",
  drugUsers: "6.6 Million",
  farmDebt: "₹1.04 Lakh Crore",
  hdi: "0.740 (Rank 12)",
  mpiPoverty: "4.75%",
  districtPCIDisparity: "8.47:1",
  giniCoefficient: "0.48"
};

const punjabVsHaryanaData = [
  { metric: "Per Capita Income", punjab: "₹2,30,523", haryana: "₹3,25,000", gap: "41% less" },
  { metric: "Youth Unemployment", punjab: "19.3%", haryana: "14.8%", gap: "+4.5pp higher" },
  { metric: "State Debt/GSDP", punjab: "44.47%", haryana: "28.3%", gap: "+16.17pp higher" },
  { metric: "Groundwater", punjab: "156%", haryana: "112%", gap: "Over-exploited" },
  { metric: "HDI Rank", punjab: "12", haryana: "9", gap: "3 ranks lower" },
];

// LS 2024 Punjab Results
const ls2024Data = {
  totalVoters: "2.14 crore",
  turnout: "62.80%",
  results: { congress: 7, aap: 3, sad: 1, bjp: 0, ind: 2 },
  voteShareShift: [
    { party: "Congress", shift: "-13.82pp", direction: "down" },
    { party: "AAP", shift: "+18.16pp", direction: "up" },
    { party: "BJP", shift: "+8.93pp", direction: "up" },
    { party: "SAD", shift: "-14.03pp", direction: "down" },
  ],
  assemblySegmentLeads: { congress: 37, aap: 33, bjp: 23 },
};

const byElectionData = [
  { seat: "Jalandhar West", result: "AAP win", netChange: "+1 AAP" },
  { seat: "Gidderbaha", result: "AAP win", netChange: "+1 AAP" },
  { seat: "Tarn Taran", result: "AAP win", netChange: "+1 AAP (from Congress)" },
];

const currentAssemblyComposition = [
  { party: "AAP", seats: 94, color: "orange" },
  { party: "INC", seats: 16, color: "blue" },
  { party: "SAD", seats: 3, color: "amber" },
  { party: "BJP", seats: 2, color: "emerald" },
  { party: "BSP", seats: 1, color: "purple" },
  { party: "IND", seats: 1, color: "cyan" },
];

// 2024 Lok Sabha Results
const lokSabha2024Results = [
  { constituency: "Gurdaspur", winner: "Congress", margin: "72,847", trend: "INC" },
  { constituency: "Amritsar", winner: "Congress", margin: "40,146", trend: "INC" },
  { constituency: "Khadoor Sahib", winner: "IND (Amritpal Singh)", margin: "Won", trend: "AAP→IND" },
  { constituency: "Jalandhar", winner: "Congress (Channi)", margin: "1,76,000", trend: "INC" },
  { constituency: "Hoshiarpur", winner: "Congress", margin: "Won", trend: "INC" },
  { constituency: "Anandpur Sahib", winner: "AAP", margin: "Won", trend: "AAP" },
  { constituency: "Ludhiana", winner: "Congress (Warring)", margin: "20,942", trend: "INC" },
  { constituency: "Fatehgarh Sahib", winner: "Congress", margin: "34,202", trend: "INC" },
  { constituency: "Faridkot", winner: "IND (Khalsa)", margin: "Won", trend: "IND" },
  { constituency: "Ferozpur", winner: "Congress", margin: "3,242", trend: "INC" },
  { constituency: "Bathinda", winner: "SAD", margin: "52,584", trend: "SAD" },
  { constituency: "Sangrur", winner: "AAP (Meet Hayer)", margin: "1,73,000", trend: "AAP" },
];

// 2022 Assembly Election Results
const assembly2022Results = [
  { party: "AAM AADMI PARTY (AAP)", seats: 92, votes: "42.01%", trend: "up" },
  { party: "CONGRESS", seats: 18, votes: "22.98%", trend: "down" },
  { party: "SHIROMANI AKALI DAL (SAD)", seats: 3, votes: "18.38%", trend: "down" },
  { party: "BHARATIYA JANTA PARTY (BJP)", seats: 2, votes: "18.56%", trend: "down" },
];

// Caste Demographics
const casteData = [
  { community: "SC (Scheduled Caste)", percentage: 32, seats: 34 },
  { community: "Jat Sikh", percentage: 21, seats: 0 },
  { community: "OBC (Other Backward Classes)", percentage: 31, seats: 0 },
  { community: "Hindu (General)", percentage: 38, seats: 0 },
];

// Crisis Metrics
const crisisData = [
  { issue: "Groundwater Extraction", value: "157%", detail: "115/153 blocks over-exploited" },
  { issue: "Drug Users", value: "6.6M", detail: "106 overdose deaths (2024)" },
  { issue: "Farmer Debt", value: "₹2.03L", detail: "Per household average" },
  { issue: "Youth Unemployment", value: "18.8%", detail: "Ages 15-29" },
];

// Top Flip Opportunity Seats (Narrowest Margins)
const flipSeats = [
  { seat: "Dera Baba Nanak", margin: "5,699", winner: "AAP", district: "Gurdaspur" },
  { seat: "Ferozpur", margin: "3,242", winner: "Congress", district: "Ferozpur" },
  { seat: "Jalandhar", margin: "1,76,000", winner: "Congress", district: "Jalandhar" },
  { seat: "Bhattinda", margin: "52,584", winner: "SAD", district: "Bathinda" },
  { seat: "Gurdaspur", margin: "72,847", winner: "Congress", district: "Gurdaspur" },
  { seat: "Ludhiana", margin: "20,942", winner: "Congress", district: "Ludhiana" },
  { seat: "Amritsar", margin: "40,146", winner: "Congress", district: "Amritsar" },
  { seat: "Fatehgarh Sahib", margin: "34,202", winner: "Congress", district: "Fatehgarh Sahib" },
  { seat: "Khadoor Sahib", margin: "Won", winner: "IND", district: "Tarn Taran" },
  { seat: "Faridkot", margin: "Won", winner: "IND", district: "Faridkot" },
];

// Congress MLA Safety Ratings
const congressMlaSafety = [
  { mla: "Sukhjinder Singh Randhawa", constituency: "Dera Baba Nanak", margin: 466, safety: "Critical" },
  { mla: "Sukhpal Singh Khaira", constituency: "Bholath", safety: "Denied Ticket" },
  { mla: "Jagbir Singh", constituency: "Nakodar", margin: 1200, safety: "Critical" },
  { mla: "Parminder Singh", constituency: "Moga", margin: 2100, safety: "Low" },
  { mla: "3-4 Others", constituency: "Various", margin: "3000-5000", safety: "Moderate" },
];

// Regional Power Centres
const powerCentres = [
  { name: "Dera Sachkhand Ballan", followers: "20+ lakh", seats: 19, region: "Doaba", influence: "Critical" },
  { name: "SGPC (Shiromani Gurdwara Prabandhak Committee)", followers: "Sikh community", seats: 0, region: "State", influence: "High" },
  { name: "Arhtiyas (Commission Agents)", followers: "15,000", seats: 0, region: "State", influence: "High" },
  { name: "Bishnoi Gang (Lawrence)", followers: "Criminal network", seats: 0, region: "South Punjab", influence: "Medium" },
];

// Infrastructure Metrics
const infraMetrics = [
  { project: "Road Development", value: "44,920 km", cost: "₹16,209 Cr", status: "Ongoing" },
  { project: "NH Projects Delayed", value: "37", detail: "4 stalled projects" },
  { project: "Malwa Uranium Contamination", value: "53%", detail: "Water samples exceed limits" },
];

// Welfare Schemes
const welfareSchemes = [
  { scheme: "Women Cash Transfer", amount: "₹1,000/month", launched: "April 2026", target: "Women voters" },
  { scheme: "SVEEP Outreach", reach: "30-40%", detail: "Voter education program" },
  { scheme: "First-Time Voters", count: "12-14 lakh", detail: "Eligible voters" },
];

// BJP Growth Trajectory
const bjpGrowth = [
  { year: "2019", voteShare: "9.63%", seats: 0 },
  { year: "2024", voteShare: "18.56%", seats: 0 },
];

// Issue Salience (12 categories from research)
const issueSalience = [
  { issue: "Drug Crisis", priority: "Critical", affected: "6.6M users" },
  { issue: "Groundwater/Environment", priority: "Critical", affected: "115/153 blocks" },
  { issue: "Farmer Debt Relief", priority: "High", affected: "100% rural households" },
  { issue: "Unemployment", priority: "High", affected: "18.8% youth" },
  { issue: "Health Infrastructure", priority: "Medium", affected: "Rural areas" },
  { issue: "Road Infrastructure", priority: "Medium", affected: "44,920 km" },
  { issue: "Sacred Religious Sites", priority: "Medium", affected: "597 cases pending" },
  { issue: "Caste Politics", priority: "Medium", affected: "32% SC population" },
];

// Regional Seat Distribution (MP2-010)
const regionalSeatDistribution = [
  { region: "Malwa", total: 69, scReserved: 17, general: 52, keyDera: "Dera Sacha Sauda (53L followers)", margin: "6-8% swing" },
  { region: "Majha", total: 25, scReserved: 8, general: 17, keyDera: "Radha Soami (diffuse)", margin: "8-10% swing" },
  { region: "Doaba", total: 23, scReserved: 9, general: 14, keyDera: "Dera Ballan (15L followers)", margin: "12-15% swing" },
];

// Major Deras and Their Influence
const deraInfluence = [
  { name: "Dera Sachkhand Ballan", followers: "20+ lakh", seats: 19, region: "Doaba", subcaste: "Nirankari", influence: "CRITICAL" },
  { name: "Dera Sacha Sauda", followers: "53+ lakh", seats: "Variable", region: "Malwa", subcaste: "Socioreligious", influence: "HIGH (post-conviction declining)" },
  { name: "Radha Soami Beas", followers: "Diffuse", seats: "Variable", region: "All", subcaste: "Spiritual", influence: "MEDIUM" },
  { name: "Dera Ralley", followers: "Significant", seats: "Local", region: "Doaba", subcaste: "Ravidassia", influence: "LOCAL" },
];

// 2027 Seat Projections by Region
const seatProjections2027 = [
  { region: "Malwa", aap: "35-42", congress: "12-18", sad: "8-12", bjp: "2-4", others: "0-2" },
  { region: "Majha", aap: "4-6", congress: "10-12", sad: "8-12", bjp: "2-4", others: "0-1" },
  { region: "Doaba", aap: "9-11", congress: "7-9", sad: "1-2", bjp: "2-3", others: "0-1" },
  { region: "Total", aap: "52-62", congress: "25-35", sad: "15-22", bjp: "5-10", others: "2-5" },
];

// NRI Voter Impact
const nriImpact = [
  { region: "Doaba", nriDensity: "Highest", remittanceInfluence: "5-8x family vote multiplier", politicalImpact: "Significant" },
  { region: "Malwa", nriDensity: "High", remittanceInfluence: "3-5x family vote multiplier", politicalImpact: "Moderate" },
  { region: "Majha", nriDensity: "Moderate", remittanceInfluence: "2-3x family vote multiplier", politicalImpact: "Moderate" },
];

// Agricultural Distress Data (Malwa focus)
const agrarianDistress = [
  { district: "Sangrur", farmerSuicides: 738, avgDebt: "₹3.36L", severity: "CRITICAL" },
  { district: "Mansa", farmerSuicides: "High", avgDebt: "₹2.5L+", severity: "CRITICAL" },
  { district: "Bathinda", farmerSuicides: "Moderate", avgDebt: "₹2.0L", severity: "HIGH" },
  { district: "Moga", farmerSuicides: 880, avgDebt: "₹2.0L", severity: "HIGH" },
  { district: "Ferozpur", farmerSuicides: "Moderate", avgDebt: "₹1.8L", severity: "HIGH" },
];

export default function ConstituencyPage() {

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
              <BarChart3 className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Constituency Proliferation
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            117 Assembly constituencies • Booth-level targeting • Regional analysis
          </p>
        </div>
        <Badge variant="success">117 ACs Active</Badge>
      </motion.div>

      {/* Region Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="border-b border-slate-200 dark:border-slate-700"
      >
        <nav className="flex gap-1 -mb-px">
          <a
            href="/dashboard/constituency"
            className="px-4 py-3 text-sm font-medium border-b-2 border-green-500 text-green-600 dark:text-green-400"
          >
            Overview
          </a>
          <a
            href="/dashboard/constituency/malwa"
            className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              Malwa (69)
            </span>
          </a>
          <a
            href="/dashboard/constituency/majha"
            className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              Majha (25)
            </span>
          </a>
          <a
            href="/dashboard/constituency/doaba"
            className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Doaba (23)
            </span>
          </a>
          <a
            href="/dashboard/constituency/powadh"
            className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              Powadh (10)
            </span>
          </a>
        </nav>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Total Constituencies"
          value="117"
          subtitle="Assembly seats"
          color="emerald"
        />
        <MetricCard
          title="Booths"
          value="23,847"
          subtitle="Across 117 ACs (ECI data)"
          color="cyan"
        />
        <MetricCard
          title="Avg Voters/Booth"
          value="906"
          subtitle="Per booth (2.16Cr voters)"
          color="blue"
        />
        <MetricCard
          title="SC Reserved Seats"
          value="34"
          subtitle="Out of 117 total ACs"
          color="purple"
        />
      </motion.div>

      {/* CYCLE 2: SOCIO-ECONOMIC CRISIS IMPACT ON CONSTITUENCIES (from research-P2/10_socio_economic) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="rounded-xl border-2 border-rose-200 bg-rose-50 p-6 dark:border-rose-800 dark:bg-rose-900/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-lg font-bold text-white">
            <AlertCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-rose-700 dark:text-rose-400">Socio-Economic Crisis Impact on Constituencies (research-P2/10_socio_economic)</p>
            <p className="text-sm text-rose-600 dark:text-rose-300">Economic distress driving voter anger across 117 assembly constituencies</p>
          </div>
        </div>

        {/* Critical Crisis Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Youth Unemployment"
            value="19.3%"
            subtitle="Ages 15-29 (CRITICAL)"
            color="rose"
          />
          <MetricCard
            title="State Debt"
            value="₹4.17L Cr"
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
            title="Groundwater"
            value="156%"
            subtitle="Over-exploited"
            color="rose"
          />
        </div>

        {/* Progress Bars for Crisis Metrics */}
        <div className="space-y-4 mb-6">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Youth Unemployment (15-29 yrs)</span>
              <span className="text-sm font-bold text-rose-600">19.3%</span>
            </div>
            <ProgressBar label="" value={19.3} color="rose" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">vs National Average 14.3% — 5pp higher in Punjab</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Debt-to-GSDP Ratio</span>
              <span className="text-sm font-bold text-rose-600">44.47%</span>
            </div>
            <ProgressBar label="" value={44.47} color="rose" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">Fiscal limit: 25% — Punjab is 1.78x over limit</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Groundwater Extraction</span>
              <span className="text-sm font-bold text-rose-600">156.36%</span>
            </div>
            <ProgressBar label="" value={100} color="rose" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">115 of 153 blocks over-exploited — agricultural crisis</p>
          </div>
        </div>

        {/* Punjab vs Haryana Comparison */}
        <Card className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Punjab vs Haryana Economic Comparison</h4>
          <DataTable
            headers={["Metric", "Punjab", "Haryana", "Impact"]}
            rows={punjabVsHaryanaData.map(d => [d.metric, d.punjab, d.haryana, d.gap])}
          />
        </Card>

        {/* Additional Metrics */}
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <Card>
            <p className="text-sm text-slate-500">Per Capita Income</p>
            <p className="text-xl font-bold text-rose-600">₹2,30,523</p>
            <p className="text-xs text-slate-500">vs Haryana ₹3,25,000</p>
          </Card>
          <Card>
            <p className="text-sm text-slate-500">Farm Debt</p>
            <p className="text-xl font-bold text-orange-600">₹1.04L Cr</p>
            <p className="text-xs text-slate-500">Avg ₹2.03L/household</p>
          </Card>
          <Card>
            <p className="text-sm text-slate-500">HDI Rank</p>
            <p className="text-xl font-bold text-amber-600">0.740</p>
            <p className="text-xs text-slate-500">Rank 12 among states</p>
          </Card>
          <Card>
            <p className="text-sm text-slate-500">Gini Coefficient</p>
            <p className="text-xl font-bold text-orange-600">0.48</p>
            <p className="text-xs text-slate-500">High inequality</p>
          </Card>
        </div>

        <Card className="mt-4 border border-rose-200 bg-rose-100 dark:border-rose-800 dark:bg-rose-900/40">
          <p className="text-sm text-rose-700 dark:text-rose-400">
            <strong>Constituency Impact:</strong> Economic crisis affects all 117 ACs. Youth unemployment (19.3%) drives anger in urban seats. Farm debt and groundwater crisis hit rural Malwa hardest. Drug crisis (6.6M users) is the #1 issue in 40+ rural seats. Anti-incumbent sentiment is high across all constituencies.
          </p>
        </Card>
      </motion.div>

      {/* 2022 Assembly Election Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                2022 Assembly Election Results
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                AAP won 92 seats with 42.01% vote share • Congress collapsed to 18 seats
              </p>
            </div>
            <Badge variant="warning">AAP Dominance</Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {assembly2022Results.map((result) => (
              <Card key={result.party} className="border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-2 py-1 text-xs font-bold ${
                    result.party.includes("AAP") ? "bg-orange-100 text-orange-700" :
                    result.party.includes("CONGRESS") ? "bg-blue-100 text-blue-700" :
                    result.party.includes("SAD") ? "bg-yellow-100 text-yellow-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {result.seats}
                  </span>
                  <span className={`text-sm ${result.trend === "up" ? "text-emerald-500" : "text-rose-500"}`}>
                    {result.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  </span>
                </div>
                <p className="mt-2 text-xs font-medium text-slate-600 dark:text-slate-400">{result.party}</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{result.votes}</p>
              </Card>
            ))}
          </div>
          <Card className="mt-4 border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
              <Info className="h-5 w-5" />
              <span className="text-sm font-medium">AAP Vote Collapse Warning</span>
            </div>
            <p className="mt-1 text-sm text-amber-600 dark:text-amber-500">
              AAP vote share collapsed from 42.01% (2022) to ~26% (2024 Lok Sabha) — losing 16 points in 2 years
            </p>
          </Card>
        </Card>
      </motion.div>

      {/* BJP Growth Despite Zero Seats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                BJP Growth Trajectory (Zero Lok Sabha Seats)
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                9.63% (2019) → 18.56% (2024) = +8.93 points growth • Led 24 assembly segments
              </p>
            </div>
            <Badge variant="danger">2027 Target</Badge>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <DataTable
                headers={["Year", "Vote Share", "Lok Sabha Seats"]}
                rows={bjpGrowth.map((r) => [r.year, r.voteShare, r.seats])}
              />
            </div>
            <div className="space-y-4">
              <Card className="border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">2027 Assembly Prediction</h4>
                <p className="mt-2 text-3xl font-bold text-green-600">12-18 Seats</p>
                <p className="text-sm text-slate-500">BJP projected seats based on growth trajectory</p>
              </Card>
              <Card className="border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Assembly Segment Control</h4>
                <p className="mt-2 text-3xl font-bold text-blue-600">24 Segments</p>
                <p className="text-sm text-slate-500">BJP led despite 0 LS seats (2024)</p>
              </Card>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Caste Demographics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Caste & Demographic Composition
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Punjab&apos;s electorate is predominantly rural (66.7%) with significant caste diversity
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {casteData.map((caste) => (
                <div key={caste.community}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{caste.community}</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{caste.percentage}%</span>
                  </div>
                  <ProgressBar
                    label=""
                    value={caste.percentage}
                    color={caste.community.includes("SC") ? "purple" : "blue"}
                    showPercentage={false}
                  />
                </div>
              ))}
            </div>
            <Card className="border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Key Demographics</h4>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Rural Population</span>
                  <span className="font-bold text-green-600">66.7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Urban Population</span>
                  <span className="font-bold text-blue-600">33.3%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">First-Time Voters</span>
                  <span className="font-bold text-purple-600">12-14 Lakh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Women Voters Target</span>
                  <span className="font-bold text-pink-600">₹1,000/mo</span>
                </div>
              </div>
              <Card className="mt-4 border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
                <p className="text-xs text-green-600 dark:text-green-400">
                  Women cash scheme launched April 2026 — pilot program targeting female voters
                </p>
              </Card>
            </Card>
          </div>
        </Card>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Regional Constituency Distribution
            </h3>
            <div className="mt-6 space-y-5">
              {REGIONS.map((region) => (
                <div key={region.id}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {region.name}
                      </span>
                      <span className="ml-2 text-sm text-slate-500">({region.border})</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        {region.constituencies} ACs
                      </span>
                    </div>
                  </div>
                  <ProgressBar
                    label=""
                    value={(region.constituencies / 117) * 100}
                    color="emerald"
                    showPercentage={false}
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    ~{(27700000 / 117).toFixed(0)}L voters per constituency
                  </p>
                </div>
              ))}
            </div>
            <Card className="mt-4 border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
              <p className="text-xs text-orange-600 dark:text-orange-400">
                <strong>Malwa Alert:</strong> AAP won 66/69 Malwa seats in 2022 (96% win rate).
                BJP now leading 24 assembly segments despite 0 LS seats.
              </p>
            </Card>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Constituency Type Breakdown
            </h3>
            <div className="mt-6 space-y-4">
              <Card className="border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
                <div className="flex items-center justify-between p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">Urban</p>
                      <p className="text-sm text-slate-500">City constituencies</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">39</p>
                    <p className="text-sm text-slate-500">33.3%</p>
                  </div>
                </div>
              </Card>
              <Card className="border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
                <div className="flex items-center justify-between p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">Rural</p>
                      <p className="text-sm text-slate-500">Village constituencies</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">78</p>
                    <p className="text-sm text-slate-500">66.7%</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="mt-4 border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-sm font-medium">Key Target</span>
              </div>
              <p className="mt-1 text-sm text-amber-600 dark:text-amber-500">
                12 urban seats are swing constituencies with &lt;5% margin
              </p>
            </Card>
          </Card>
        </motion.div>

        {/* Crisis Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Constituency Crisis Indicators
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Critical issues impacting voter sentiment and turnout
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {crisisData.map((crisis) => (
                <Card key={crisis.issue} className="border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{crisis.issue}</span>
                    <Badge variant="danger">{crisis.value}</Badge>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">{crisis.detail}</p>
                </Card>
              ))}
            </div>
            <Card className="mt-4 border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
              <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Critical Infrastructure Alert</span>
              </div>
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                Uranium contamination: 53% water samples in Malwa exceed safe limits.
                Groundwater extraction at 157% — 115 of 153 blocks over-exploited.
              </p>
            </Card>
          </Card>
        </motion.div>
      </div>

      {/* Flip Opportunity Seats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Top 10 Flip Opportunity Seats
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Narrowest margins from 2024 Lok Sabha — highest conversion potential
              </p>
            </div>
            <Badge variant="warning">Priority Targets</Badge>
          </div>
          <div className="mt-6 overflow-x-auto">
            <DataTable
              headers={["Constituency", "Margin", "Winner (2024)", "District"]}
              rows={flipSeats.map((s) => [s.seat, s.margin, s.winner, s.district])}
            />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Card className="border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
              <p className="text-xs font-medium text-red-700 dark:text-red-400">Critical Margins</p>
              <p className="text-lg font-bold text-red-600">3 Seats</p>
              <p className="text-xs text-red-500">Under 10,000 votes</p>
            </Card>
            <Card className="border border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20">
              <p className="text-xs font-medium text-yellow-700 dark:text-yellow-400">Low Margins</p>
              <p className="text-lg font-bold text-yellow-600">4 Seats</p>
              <p className="text-xs text-yellow-500">Under 75,000 votes</p>
            </Card>
            <Card className="border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
              <p className="text-xs font-medium text-green-700 dark:text-green-400">IND Seats</p>
              <p className="text-lg font-bold text-green-600">2 Seats</p>
              <p className="text-xs text-green-500">Khadoor Sahib, Faridkot</p>
            </Card>
          </div>
        </Card>
      </motion.div>

      {/* Congress MLA Safety Ratings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Congress MLA Safety Audit
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Only 3-4 of 18 Congress MLAs are &quot;safe&quot; • Sukhpal Singh Khaira denied ticket (ED case)
              </p>
            </div>
            <Badge variant="danger">18 MLAs Total</Badge>
          </div>
          <div className="mt-6 overflow-x-auto">
            <DataTable
              headers={["MLA Name", "Constituency", "Margin/Safety", "Status"]}
              rows={congressMlaSafety.map((m) => [
                m.mla,
                m.constituency,
                typeof m.margin === "number" ? m.margin.toLocaleString() : (m.margin || "N/A"),
                m.safety,
              ])}
            />
          </div>
          <Card className="mt-4 border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Most Vulnerable</span>
            </div>
            <p className="mt-1 text-sm text-blue-600 dark:text-blue-500">
              Sukhjinder Singh Randhawa (Dera Baba Nanak) won by only 466 votes in 2022 — the narrowest margin among all Congress MLAs.
              Dera Ballan influence is critical in this seat.
            </p>
          </Card>
        </Card>
      </motion.div>

      {/* Regional Power centres */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Informal Power Centres
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Deras, religious bodies, and economic networks that influence voting patterns
              </p>
            </div>
            <Badge variant="info">Key Stakeholders</Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {powerCentres.map((centre) => (
              <Card key={centre.name} className="border border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">{centre.name}</h4>
                    <p className="mt-1 text-sm text-slate-500">{centre.followers} followers</p>
                  </div>
                  <Badge variant={centre.influence === "Critical" ? "danger" : centre.influence === "High" ? "warning" : "default"}>
                    {centre.influence}
                  </Badge>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-700">
                  <span className="text-xs text-slate-500">{centre.region}</span>
                  {centre.seats > 0 && (
                    <span className="text-xs font-medium text-green-600">{centre.seats} seats influenced</span>
                  )}
                </div>
              </Card>
            ))}
          </div>
          <Card className="mt-4 border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20">
            <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
              <UsersRound className="h-5 w-5" />
              <span className="text-sm font-medium">Dera Sachkhand Ballan — Critical for Congress</span>
            </div>
            <p className="mt-1 text-sm text-purple-600 dark:text-purple-500">
              20+ lakh followers • Controls 19 Doaba seats • Sukhjinder Singh Randhawa most vulnerable at 466 votes
              • NRI influence strong in Doaba region
            </p>
          </Card>
        </Card>
      </motion.div>

      {/* Infrastructure & Development */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.3 }}
      >
        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Infrastructure & Development Metrics
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Rs 16,209 Cr road program • 37 NH projects delayed • 4 stalled
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {infraMetrics.map((infra) => (
              <Card key={infra.project} className="border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{infra.project}</span>
                  <Badge variant={infra.project.includes("Uranium") ? "danger" : "info"}>{infra.value}</Badge>
                </div>
                <p className="mt-2 text-xs text-slate-500">{infra.detail || infra.cost}</p>
              </Card>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Road Program"
              value="44,920 km"
              subtitle="Under development"
              color="blue"
            />
            <MetricCard
              title="NH Projects"
              value="37"
              subtitle="Delayed projects"
              color="amber"
            />
            <MetricCard
              title="Stalled Projects"
              value="4"
              subtitle="National highways"
              color="rose"
            />
            <MetricCard
              title="Uranium Risk"
              value="53%"
              subtitle="Water contamination"
              color="orange"
            />
          </div>
        </Card>
      </motion.div>

      {/* Welfare Schemes & Voter Outreach */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.4 }}
      >
        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Welfare Schemes & Voter Outreach
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            SVEEP reaches 30-40% • Booth sevak strategy: 25,000 planned under Panna Pramukh model
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {welfareSchemes.map((scheme) => (
              <Card key={scheme.scheme} className="border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">{scheme.scheme}</h4>
                <p className="mt-2 text-2xl font-bold text-green-600">{scheme.amount || scheme.reach || scheme.count}</p>
                <p className="mt-1 text-xs text-slate-500">{scheme.detail}</p>
                {scheme.launched && (
                  <Badge variant="success">Launched {scheme.launched}</Badge>
                )}
              </Card>
            ))}
          </div>
          <Card className="mt-4 border border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-900/20">
            <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Booth Sevak Strategy</span>
            </div>
            <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-500">
              Congress plans 25,000 booth sevaks under Panna Pramukh model.
              Target: 8-10 booth-level agents per booth for 100% coverage across 23,847 booths.
            </p>
          </Card>
        </Card>
      </motion.div>

      {/* Issue Salience Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.5 }}
      >
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Issue Salience Matrix
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                12 issue categories measured via surveys, social media, news, KII, and focus groups
              </p>
            </div>
            <Badge variant="info">12 Categories</Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {issueSalience.map((issue) => (
              <Card key={issue.issue} className="border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{issue.issue}</span>
                  <Badge variant={issue.priority === "Critical" ? "danger" : issue.priority === "High" ? "warning" : "default"}>
                    {issue.priority}
                  </Badge>
                </div>
                <p className="mt-2 text-xs text-slate-500">{issue.affected}</p>
              </Card>
            ))}
          </div>
          <Card className="mt-4 border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Regional Issue Signatures</h4>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs font-medium text-slate-500">Malwa</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Drug crisis, groundwater, farmer debt</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Majha</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Border security, drug trafficking, unemployment</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Doaba</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Dera influence, NRI remittances, youth unemployment</p>
              </div>
            </div>
          </Card>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.6 }}
      >
        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            2024 Lok Sabha Results — Punjab
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Congress 7 | AAP 3 | SAD 1 | BJP 0 | IND 2 • Vote share: BJP 18.56%, Congress 22.98%, AAP 26%
          </p>
          <div className="mt-6 overflow-x-auto">
            <DataTable
              headers={["Lok Sabha Seat", "Winner", "Margin", "Trend"]}
              rows={lokSabha2024Results.map((r) => [
                r.constituency,
                r.winner,
                r.margin,
                r.trend,
              ])}
            />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <Card className="border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
              <p className="text-xs text-blue-600 dark:text-blue-400">Congress Vote Share</p>
              <p className="text-xl font-bold text-blue-700">22.98%</p>
            </Card>
            <Card className="border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
              <p className="text-xs text-orange-600 dark:text-orange-400">AAP Vote Share</p>
              <p className="text-xl font-bold text-orange-700">26%</p>
            </Card>
            <Card className="border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
              <p className="text-xs text-green-600 dark:text-green-400">BJP Vote Share</p>
              <p className="text-xl font-bold text-green-700">18.56%</p>
            </Card>
            <Card className="border border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20">
              <p className="text-xs text-yellow-600 dark:text-yellow-400">SAD Vote Share</p>
              <p className="text-xl font-bold text-yellow-700">18.38%</p>
            </Card>
          </div>
        </Card>
      </motion.div>

      {/* CYCLE 2: LS 2024 Electoral Data Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.7 }}
        className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
            <BarChart3 className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-emerald-700 dark:text-emerald-400">LS 2024 Electoral Data (Cycle 2)</p>
            <p className="text-sm text-emerald-600 dark:text-emerald-300">2.14 crore voters | 62.80% turnout | Vote share shifts | By-election results</p>
          </div>
        </div>

        {/* Voter Registration & Turnout */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6 mb-6">
          <MetricCard
            title="Total Voters"
            value="2.14 Cr"
            subtitle="LS 2024"
            color="emerald"
          />
          <MetricCard
            title="Turnout"
            value="62.80%"
            subtitle="LS 2024"
            color="cyan"
          />
          <MetricCard
            title="First-Time Voters"
            value="5.38 L"
            subtitle="New registrations"
            color="cyan"
          />
          <Card className="border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Congress LS Seats</p>
            <p className="text-2xl font-bold text-blue-600">{ls2024Data.results.congress}</p>
          </Card>
          <Card className="border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
            <p className="text-xs text-slate-500">AAP LS Seats</p>
            <p className="text-2xl font-bold text-orange-600">{ls2024Data.results.aap}</p>
          </Card>
          <Card className="border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
            <p className="text-xs text-slate-500">BJP LS Seats</p>
            <p className="text-2xl font-bold text-green-600">{ls2024Data.results.bjp}</p>
          </Card>
        </div>

        {/* Vote Share Shifts */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Vote Share Shift (2022 Assembly vs 2024 LS)</h4>
          <div className="grid gap-4 md:grid-cols-4">
            {ls2024Data.voteShareShift.map((shift) => (
              <Card key={shift.party} className="border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{shift.party}</span>
                  <Badge variant={shift.direction === "up" ? "success" : "danger"}>{shift.shift}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Assembly Segment Leads */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Assembly Segment Leads (2024 LS)</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
              <p className="text-xs text-blue-600 dark:text-blue-400">Congress Leads</p>
              <p className="text-3xl font-bold text-blue-700">{ls2024Data.assemblySegmentLeads.congress}</p>
            </Card>
            <Card className="border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
              <p className="text-xs text-orange-600 dark:text-orange-400">AAP Leads</p>
              <p className="text-3xl font-bold text-orange-700">{ls2024Data.assemblySegmentLeads.aap}</p>
            </Card>
            <Card className="border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
              <p className="text-xs text-green-600 dark:text-green-400">BJP Leads</p>
              <p className="text-3xl font-bold text-green-700">{ls2024Data.assemblySegmentLeads.bjp}</p>
            </Card>
          </div>
        </div>

        {/* By-Election Results */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">By-Election Results (AAP net +2 seats)</h4>
          <div className="overflow-x-auto">
            <DataTable
              headers={["Seat", "Result", "Net Change"]}
              rows={byElectionData.map((b) => [b.seat, b.result, b.netChange])}
            />
          </div>
        </div>

        {/* Current Assembly Composition */}
        <div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Current Assembly Composition (117 seats)</h4>
          <div className="grid gap-4 md:grid-cols-6">
            {currentAssemblyComposition.map((comp) => (
              <Card key={comp.party} className="border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`h-3 w-3 rounded-full bg-${comp.color}-500`} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{comp.party}</span>
                </div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{comp.seats}</p>
                <p className="text-xs text-slate-500">seats</p>
              </Card>
            ))}
          </div>
          <Card className="mt-4 border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
            <p className="text-sm text-amber-700 dark:text-amber-400">
              <strong>Note:</strong> Assembly composition reflects post-defection state. AAP 94 includes original 92 + 2 (Chog 1,IND 1). Congress reduced from 18 to 16 after Jakhar brothers&apos; resignation.
            </p>
          </Card>
        </div>
      </motion.div>

      {/* Election Intelligence Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.8 }}
      >
        <ElectionIntelligenceSection />
      </motion.div>
    </div>
  );
}
