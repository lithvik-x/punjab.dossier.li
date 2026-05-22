"use client";

import { MetricCard, DataTable, Badge, ProgressBar } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  BarChart2,
  AlertTriangle,
  CheckCircle,
  Target,
  Calendar,
  Vote,
} from "lucide-react";

// MP10 Predictive Analytics Data
const seatProjectionModel = {
  observers: 45,
  surveys: 3,
  aiccOversight: true,
  confidenceInterval: "±15-25 seats",
  methodology: "MRP (Multiple Recursive Prediction)",
};

const voteShareForecasts = [
  { party: "Congress", low: 30, high: 33, avg: 31.5 },
  { party: "AAP", low: 26, high: 27, avg: 26.5 },
  { party: "SAD", low: 19, high: 20, avg: 19.5 },
  { party: "BJP", low: 13, high: 14, avg: 13.5 },
];

const constituencyMargins = [
  { category: "Safe", threshold: ">10%", description: "Comfortable win margin" },
  { category: "Likely", threshold: "5-10%", description: "Favorable but not secure" },
  { category: "Lean", threshold: "1-5%", description: "Narrow advantage" },
  { category: "Tossup", threshold: "<1%", description: "Too close to call" },
];

const swingVoterData = [
  { party: "AAP", swing2017to2022: "+27.9%", description: "Massive gain from Congress" },
  { party: "Congress", swing2017to2022: "-15.6%", description: "Major loss to AAP" },
  { party: "Seats under 10% margin", value: 68, description: "Competitive constituencies" },
];

const candidateViability = [
  { metric: "Total Candidates Analyzed", value: 1020 },
  { metric: "Renomination Rate", value: "35%" },
  { metric: "Postgraduate Impact", value: "+28% winnability" },
  { metric: "Criminal Cases Impact", value: "+27% winnability" },
  { metric: "Crorepati Status", value: "+14% winnability" },
];

const regionalCasteBlocs = [
  { region: "Malwa", seats: 69, deraInfluence: "12-18%" },
  { region: "Majha", seats: 25, deraInfluence: "Minimal" },
  { region: "Doaba", seats: 23, deraInfluence: "High (Dera concentration)" },
];

const turnoutModeling = [
  { election: "2022 Punjab", turnout: "65.38%", trend: "down" },
  { election: "2017 Punjab", turnout: "78.06%", trend: "up" },
  { election: "Rural Areas", turnout: "70-75%", segment: "rural" },
  { election: "Urban Areas", turnout: "58-64%", segment: "urban" },
];

const evmCounting = [
  { metric: "Booths per Counting Round", value: 14 },
  { metric: "Recount Threshold", value: "1000 votes" },
  { metric: "Total Polling Stations", value: "22,000-25,000" },
];

const mp10Scenarios = [
  { scenario: "Base Case", probability: "45-50%", congressSeats: "55-65", aapSeats: "35-45", conditions: "Hung assembly, Congress largest single party" },
  { scenario: "Best Case (Congress)", probability: "20-25%", congressSeats: "70-85", aapSeats: "25-35", conditions: "CM face announced early, opposition fragmentation" },
  { scenario: "Worst Case (Congress)", probability: "25-30%", congressSeats: "18-30", aapSeats: "60-75", conditions: "AAP welfare reinforcement, Congress leadership vacuum" },
];

const cmFaceAnalysis = [
  { candidate: "Charanjit Singh Channi", base: "Dalit electorate (32% SC)", strength: "First Dalit CM symbolism", weakness: "Majha region, panthic voters", regionalGap: "Sikh-majority constituencies" },
  { candidate: "Raja Warring", base: "Youth, rural organization", strength: "PPCC president network", weakness: "No separate CM claim", regionalGap: "Urban elite" },
  { candidate: "Partap Singh Bajwa", base: "Legislative experience", strength: "Urban-professional base", weakness: "Age perception", regionalGap: "Youth, rural Dalit" },
  { candidate: "Sukhjinder Randhawa", base: "Doaba-Malwa border", strength: "Regional heavyweight", weakness: "Limited pan-state recognition", regionalGap: "Majha, urban youth" },
];

const cmAnnouncementTiming = [
  { timing: "Optimal Window", days: "180-240", description: "6-8 months before election" },
  { timing: "Minimum Viable", days: "150", description: "By November 2026" },
  { timing: "Current Status (May 2026)", days: "Delayed", description: "Already 2-3 months behind optimal" },
  { timing: "Risk Threshold", days: "120", description: "Below this = lame duck fatigue" },
  { timing: "CM Face Delay Cost", cost: "0.5-1% per month", description: "Each month of delay costs vote share" },
];

const breakevenAnalysis = [
  { variable: "CM Candidate by July 2026", seatImpact: "+10-15 seats" },
  { variable: "BJP-SAD Alliance", seatImpact: "-10-15 seats" },
  { variable: "Amritpal Singh outfit >5%", seatImpact: "-5-8 seats (from AAP)" },
  { variable: "AAP new welfare scheme Q3 2026", seatImpact: "-5-10 seats" },
];

// MP10-004: Swing Voter Movement Model
const voteTransferMatrix = [
  { from: "Congress 2017 voters", toAAP: "~40%", toSAD: "~5%", retained: "~55%", note: "Major shift in 2017→2022" },
  { from: "SAD+BJP 2017 voters", toAAP: "~25%", toCongress: "~5%", retained: "~55%", note: "BJP retained more than SAD" },
  { from: "BSP 2017 voters", toAAP: "~20%", toCongress: "~15%", toSAD: "~15%", retained: "~35%", note: "Dalit vote split 3 ways" },
  { from: "AAP 2017 voters", toCongress: "~8%", toSAD: "~5%", retained: "~87%", note: "AAP retained most 2017 voters" },
];

const swingDecayFormula = {
  formula: "Swing(t) = Swing(0) × e^(−λt) + Campaign_Shock(t)",
  lambda: "0.03-0.07 decay constant",
  interpretation: "Initial structural swing decays exponentially; campaign shocks add temporary swing",
};

const notAProtestSignal = {
  value: "1.2%",
  nationalAverage: "~0.8%",
  protestImpact: "3-5% hidden swing potential",
  threshold: ">2% NOTA = high protest signal",
  seatsExceededByNOTA: 23,
};

const swingVoterTimingBreakdown = [
  { phase: "Early (8+ weeks out)", share: "8-12%", description: "Committed ideologues, single-issue voters" },
  { phase: "Campaign (4-8 weeks)", share: "25-35%", description: "Persuadable middle, moved by candidate announcements" },
  { phase: "Late (final 2 weeks)", share: "40-50%", description: "Highest volatility, triggered by campaign events" },
  { phase: "Booth-day", share: "5-10%", description: "Cross-voting, family pressure, last-minute appeals" },
];

const aapToCongressSwing = {
  magnitude: "3-7%",
  conversionRate: "22-28%",
  regions: ["Malwa", "Doaba"],
  keySeats: "Doaba (Hoshiarpur, Kapurthala, Jalandhar)",
  note: "AAP's 2022 voters open to switching — soft AAP voters",
};

// MP10-001: Ticket Authority
const ticketAuthority = {
  decisionMaker: "AICC High Command",
  notPPCC: true,
  inCharge: "Bhupesh Baghel (AICC General Secretary)",
  directive: "Winnability is the sole criterion",
  surveyCount: 3,
  winnabilityOverrides: "Factional claims overridden by survey data",
};

// MP10-005: Candidate Viability - Renomination
const renominationData = {
  electedMPRenomination: "53%",
  lostCandidateRenomination: "19%",
  allCandidatesRenomination: "~35%",
  postgraduateBonus: "+28%",
  criminalCasesBonus: "+27%",
  crorepatiBonus: "+14%",
  fieldWorkRequirement: "6 months minimum before election",
};

// MP10-015: Risk-Adjusted Confidence Levels
const modelConfidenceLevels = [
  { percentile: "P10 (Worst case)", seats: "38-44", probability: "10% chance below" },
  { percentile: "P30 (Downside)", seats: "50-56", probability: "30% below, 70% above" },
  { percentile: "P50 (Median)", seats: "60-66", probability: "Central estimate, 50/50" },
  { percentile: "P70 (Upside)", seats: "68-73", probability: "70% below, 30% above" },
  { percentile: "P90 (Best case)", seats: "76-84", probability: "10% chance above" },
];

const marginSeatData = [
  { threshold: "<10% margin", seats: 68, description: "Competitive/swing-sensitive" },
  { threshold: "<5% margin", seats: 23, description: "Extremely sensitive to small voter shifts" },
  { threshold: "<2% margin", seats: 9, description: "Statistically negligible; could flip with 1% net swing" },
];

// Election Scenarios
const electionScenarios = [
  { scenario: "A: Congress Majority", probability: "15-20%", seats: "60-72", conditions: "35-38% vote, AAP fracture, anti-incumbency mature", coalition: "None required" },
  { scenario: "B: Congress Strong", probability: "20-25%", seats: "52-59", conditions: "32-35% vote, AAP united but loses rural Malwa", coalition: "2-4 independents possible" },
  { scenario: "C: Hung Assembly", probability: "25-30%", seats: "45-52 (Congress)", conditions: "28-32% vote, AAP fractures (15-20 MLAs)", coalition: "Kingmaker dynamics" },
  { scenario: "D: Congress Minority", probability: "20-25%", seats: "40-48", conditions: "27-30% vote, AAP united, Modiwave active", coalition: "SAD partnership needed" },
  { scenario: "E: AAP Realignment", probability: "10-15%", seats: "30-40", conditions: "<25% vote, AAP fractures into multiple factions", coalition: "Opposition coalition" },
  { scenario: "F: AAP Supermajority", probability: "5-10%", seats: "15-25", conditions: "<22% vote, AAP governance record succeeds", coalition: "N/A (opposition)" },
];

const seatProjections = [
  { confidence: "95% CI", range: "28-78 seats", interpretation: "Wide range reflecting uncertainty" },
  { confidence: "80% CI", range: "38-68 seats", interpretation: "Moderate confidence interval" },
  { confidence: "50% CI", range: "45-60 seats", interpretation: "Core projection range" },
  { confidence: "Point Estimate", range: "50-55 seats", interpretation: "Most likely outcome" },
];

const voteShareThresholds = [
  { threshold: "<20%", projectedSeats: "10-20", scenario: "Worst case" },
  { threshold: "20-25%", projectedSeats: "18-28", scenario: "Floor scenario" },
  { threshold: "25-30%", projectedSeats: "35-48", scenario: "Base case" },
  { threshold: "30-35%", projectedSeats: "52-62", scenario: "Target range" },
  { threshold: ">35%", projectedSeats: "65-78", scenario: "Best case" },
];

const regionalSwingTargets = [
  { region: "Malwa (69 seats)", current: "11 seats", target: "35-40 seats", swing: "+24-29" },
  { region: "Majha (25 seats)", current: "4 seats", target: "12-15 seats", swing: "+8-11" },
  { region: "Doaba (23 seats)", current: "3 seats", target: "10-12 seats", swing: "+7-9" },
  { region: "TOTAL (117 seats)", current: "18 seats", target: "57-67 seats", swing: "+39-49" },
];

const riskTaxonomy = [
  { category: "A: Strategic", risk: "Voter fatigue with Congress", probability: "Medium (0.4)", impact: "High", mitigation: "Fresh leadership narrative" },
  { category: "A: Strategic", risk: "AAP welfare scheme retention", probability: "High (0.7)", impact: "High", mitigation: "Contrast on implementation failures" },
  { category: "A: Strategic", risk: "Caste consolidation failure", probability: "Medium (0.5)", impact: "High", mitigation: "Pre-poll caste coordination" },
  { category: "B: Operational", risk: "Fund allocation inefficiency", probability: "Medium (0.4)", impact: "Medium", mitigation: "Centralized war chest" },
  { category: "B: Operational", risk: "Candidate quality variance", probability: "Medium (0.5)", impact: "Medium", mitigation: "Standardized evaluation" },
  { category: "B: Operational", risk: "Booth agent coverage gaps", probability: "Medium (0.4)", impact: "Medium", mitigation: "Training + volunteer mobilization" },
  { category: "C: External", risk: "National event overshadowing", probability: "Low (0.2)", impact: "High", mitigation: "Rapid-response communication" },
  { category: "C: External", risk: "Economic shock (agri crisis)", probability: "Low (0.3)", impact: "High", mitigation: "Emergency policy proposals" },
];

export default function PredictiveAnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
              <BarChart2 className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Predictive Analytics
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Seat Projections, Swing Models, CM Face Analysis, Risk Assessment
          </p>
        </div>
        <Badge variant="success">● Active Models</Badge>
      </motion.div>

      {/* MP10 Predictive Analytics Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <Card>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-emerald-700 dark:text-emerald-400">MP10 Predictive Analytics — Punjab 2027</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-300">Advanced scenario modeling, CM face impact, seat projection methodology</p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Seat Projection Model (MP10-001)</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                    <p className="text-xs text-slate-500">Field Observers</p>
                    <p className="text-xl font-bold text-emerald-600">{seatProjectionModel.observers}</p>
                  </div>
                  <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                    <p className="text-xs text-slate-500">Surveys Conducted</p>
                    <p className="text-xl font-bold text-emerald-600">{seatProjectionModel.surveys}</p>
                  </div>
                  <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                    <p className="text-xs text-slate-500">Confidence Interval</p>
                    <p className="text-xl font-bold text-emerald-600">{seatProjectionModel.confidenceInterval}</p>
                  </div>
                  <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                    <p className="text-xs text-slate-500">AICC Oversight</p>
                    <p className="text-xl font-bold text-emerald-600">{seatProjectionModel.aiccOversight ? "Yes" : "No"}</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-500">Methodology: MRP (Multiple Recursive Prediction) with observer network validation</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Vote Share Forecasts (MP10-002)</h4>
                <div className="space-y-2">
                  {voteShareForecasts.map(v => (
                    <div key={v.party} className="flex items-center justify-between rounded-lg bg-white p-2 dark:bg-slate-800">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{v.party}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-emerald-600">{v.low}-{v.high}%</span>
                        <ProgressBar label="" value={v.avg} color="emerald" showPercentage={false} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 mt-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Constituency Margin Thresholds (MP10-003)</h4>
                <DataTable
                  headers={["Category", "Margin", "Description"]}
                  rows={constituencyMargins.map(c => [c.category, c.threshold, c.description])}
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Swing Voter Analysis (MP10-004)</h4>
                <div className="space-y-2">
                  {swingVoterData.map(s => (
                    <div key={s.party || s.description} className="flex items-center justify-between rounded-lg bg-white p-2 dark:bg-slate-800">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{s.description || s.party}</span>
                      <span className="text-sm font-bold text-emerald-600">{s.swing2017to2022 || s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 mt-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Candidate Viability Scoring (MP10-005)</h4>
                <div className="grid grid-cols-2 gap-2">
                  {candidateViability.map(c => (
                    <div key={c.metric} className="rounded-lg bg-white p-2 dark:bg-slate-800">
                      <p className="text-xs text-slate-500">{c.metric}</p>
                      <p className="text-lg font-bold text-emerald-600">{c.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Regional Caste Blocs (MP10-006)</h4>
                <DataTable
                  headers={["Region", "Seats", "Dera Influence"]}
                  rows={regionalCasteBlocs.map(r => [r.region, r.seats, r.deraInfluence])}
                />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 mt-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Turnout Modeling (MP10-007)</h4>
                <div className="space-y-2">
                  {turnoutModeling.map(t => (
                    <div key={t.election} className="flex items-center justify-between rounded-lg bg-white p-2 dark:bg-slate-800">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{t.election}</span>
                      <span className="text-sm font-bold text-emerald-600">{t.turnout}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">EVM Counting Methodology (MP10-008)</h4>
                <div className="space-y-2">
                  {evmCounting.map(e => (
                    <div key={e.metric} className="flex items-center justify-between rounded-lg bg-white p-2 dark:bg-slate-800">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{e.metric}</span>
                      <span className="text-sm font-bold text-emerald-600">{e.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Enhanced Scenario Planning (MP10-009)</h4>
              <DataTable
                headers={["Scenario", "Probability", "Congress Seats", "AAP Seats", "Key Conditions"]}
                rows={mp10Scenarios.map(s => [s.scenario, s.probability, s.congressSeats, s.aapSeats, s.conditions])}
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-2 mt-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">CM Face Impact Analysis (MP10-010)</h4>
                <DataTable
                  headers={["Candidate", "Base", "Strength", "Weakness"]}
                  rows={cmFaceAnalysis.map(c => [c.candidate, c.base, c.strength, c.weakness])}
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">CM Announcement Timing (MP10-010)</h4>
                <DataTable
                  headers={["Timing", "Days", "Description"]}
                  rows={cmAnnouncementTiming.map(t => [t.timing || "N/A", t.days || t.cost || "N/A", t.description || "N/A"])}
                />
                <div className="mt-3 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                  <p className="text-xs font-medium text-amber-700 dark:text-amber-400">Breakeven Analysis</p>
                  <div className="mt-2 space-y-1">
                    {breakevenAnalysis.map(b => (
                      <div key={b.variable} className="flex justify-between text-xs">
                        <span className="text-slate-600 dark:text-slate-400">{b.variable}</span>
                        <span className="font-medium text-amber-600">{b.seatImpact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Swing Voter Movement Model */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <Card>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-teal-700 dark:text-teal-400">MP10-004: Swing Voter Movement Model</p>
                <p className="text-sm text-teal-600 dark:text-teal-300">Vote transfer matrix, swing decay formula, AAP→Congress reversal tracking</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Vote Transfer Matrix (2017→2022)
                </p>
                <DataTable
                  headers={["From", "To AAP", "To Congress", "Retained", "Note"]}
                  rows={voteTransferMatrix.map(v => [v.from || "N/A", v.toAAP || "N/A", v.toCongress || v.toSAD || "-", v.retained || "N/A", v.note || "N/A"])}
                />
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-2 flex items-center gap-2">
                    <BarChart2 className="h-4 w-4" />
                    Swing Decay Formula
                  </p>
                  <code className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded block mb-2">{swingDecayFormula.formula}</code>
                  <p className="text-xs text-slate-600 dark:text-slate-400">λ = {swingDecayFormula.lambda}. {swingDecayFormula.interpretation}</p>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    NOTA as Protest Signal
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                      <p className="text-xl font-bold text-teal-600">{notAProtestSignal.value}</p>
                      <p className="text-xs text-slate-500">Punjab 2022 NOTA</p>
                    </div>
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                      <p className="text-xl font-bold text-orange-600">{notAProtestSignal.threshold}</p>
                      <p className="text-xs text-slate-500">High protest signal</p>
                    </div>
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                      <p className="text-xl font-bold text-red-600">{notAProtestSignal.protestImpact}</p>
                      <p className="text-xs text-slate-500">Hidden swing potential</p>
                    </div>
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                      <p className="text-xl font-bold text-purple-600">{notAProtestSignal.seatsExceededByNOTA}</p>
                      <p className="text-xs text-slate-500">Seats exceeded by NOTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Swing Voter Timing Breakdown
                </p>
                <DataTable
                  headers={["Phase", "Share of Swing", "Description"]}
                  rows={swingVoterTimingBreakdown.map(s => [s.phase, s.share, s.description])}
                />
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  AAP→Congress Swing Reversal (2027)
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Magnitude</span>
                    <span className="font-bold text-teal-600">{aapToCongressSwing.magnitude}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Conversion Rate</span>
                    <span className="font-bold text-blue-600">{aapToCongressSwing.conversionRate}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Key Regions</span>
                    <span className="font-bold text-purple-600">{aapToCongressSwing.regions.join(", ")}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Key Seats</span>
                    <span className="font-bold text-orange-600">{aapToCongressSwing.keySeats}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">{aapToCongressSwing.note}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Ticket Authority & Winnability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <Card>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white">
                <Vote className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-violet-700 dark:text-violet-400">MP10-001/005: Ticket Authority & Winnability</p>
                <p className="text-sm text-violet-600 dark:text-violet-300">AICC High Command authority, survey-based candidate selection, renomination data</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
                <p className="text-xs text-slate-500">Decision Maker</p>
                <p className="text-sm font-bold text-violet-600">{ticketAuthority.decisionMaker}</p>
                <p className="text-xs text-slate-400">NOT PPCC</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
                <p className="text-xs text-slate-500">Punjab In-Charge</p>
                <p className="text-sm font-bold text-violet-600">{ticketAuthority.inCharge}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
                <p className="text-xs text-slate-500">Ticket Criterion</p>
                <p className="text-sm font-bold text-red-600">{ticketAuthority.directive}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
                <p className="text-xs text-slate-500">Surveys Commissioned</p>
                <p className="text-sm font-bold text-blue-600">{ticketAuthority.surveyCount} surveys</p>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-semibold text-slate-500 mb-2">Renomination Rate (Elected MPs 2014)</p>
                <p className="text-2xl font-bold text-green-600">{renominationData.electedMPRenomination}</p>
                <p className="text-xs text-slate-500">vs 19% for lost candidates</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-semibold text-slate-500 mb-2">Viability Multipliers</p>
                <div className="space-y-1 text-xs">
                  <p>PG: <span className="text-green-600 font-bold">+{renominationData.postgraduateBonus}</span></p>
                  <p>Criminal: <span className="text-amber-600 font-bold">+{renominationData.criminalCasesBonus}</span></p>
                  <p>Crorepati: <span className="text-blue-600 font-bold">+{renominationData.crorepatiBonus}</span></p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs font-semibold text-slate-500 mb-2">Field Work Requirement</p>
                <p className="text-xl font-bold text-violet-600">{renominationData.fieldWorkRequirement}</p>
                <p className="text-xs text-slate-500">Minimum before elections</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Risk-Adjusted Confidence Levels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <Card>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white">
                <BarChart2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-amber-700 dark:text-amber-400">MP10-015: Risk-Adjusted Confidence Levels</p>
                <p className="text-sm text-amber-600 dark:text-amber-300">P10/P50/P90 projection framework, margin seat analysis</p>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-3">Seat Count Confidence Intervals</p>
                <DataTable
                  headers={["Percentile", "Seats", "Probability"]}
                  rows={modelConfidenceLevels.map(m => [m.percentile, m.seats, m.probability])}
                />
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-3">Marginal Seat Alert Thresholds</p>
                <div className="space-y-3">
                  {marginSeatData.map((item) => (
                    <div key={item.threshold} className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400">
                        {item.seats}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.threshold}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/30">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Key:</strong> Congress P50 (median) = 60-66 seats | CE (certainty equivalent) = 54-56 seats | MGS (minimum guaranteed) = 38-44 seats
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Election Forecasting & Scenario Planning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Card>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white">
                <BarChart2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-violet-700 dark:text-violet-400">Election Forecasting & Scenario Planning</p>
                <p className="text-sm text-violet-600 dark:text-violet-300">Multi-scenario modeling for strategic flexibility</p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Election Scenarios (2027)</h4>
                <DataTable
                  headers={["Scenario", "Probability", "Seats", "Coalition"]}
                  rows={electionScenarios.map(s => [s.scenario, s.probability, s.seats, s.coalition])}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Seat Projection Confidence</h4>
                <DataTable
                  headers={["Confidence", "Range", "Interpretation"]}
                  rows={seatProjections.map(s => [s.confidence, s.range, s.interpretation])}
                />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 mt-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Vote Share Thresholds</h4>
                <DataTable
                  headers={["Vote Share", "Projected Seats", "Scenario"]}
                  rows={voteShareThresholds.map(v => [v.threshold, v.projectedSeats, v.scenario])}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Regional Swing Targets</h4>
                <DataTable
                  headers={["Region", "Current", "Target", "Swing"]}
                  rows={regionalSwingTargets.map(r => [r.region, r.current, r.target, r.swing])}
                />
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Risk Taxonomy</h4>
              <DataTable
                headers={["Category", "Risk", "Probability", "Impact", "Mitigation"]}
                rows={riskTaxonomy.map(r => [r.category, r.risk, r.probability, r.impact, r.mitigation])}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
